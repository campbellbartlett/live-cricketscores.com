import {AfterViewChecked, AfterViewInit, Component, Input, OnChanges, OnDestroy, OnInit} from '@angular/core';
import {Commentary, Inning} from 'src/app/models/commentary';
import {CricketDataService} from '../../../services/cricket-data.service';
import {ActionSheetController, ToastController} from '@ionic/angular';
import {ActionSheetButton} from '@ionic/core/dist/types/components/action-sheet/action-sheet-interface';


@Component({
  selector: 'app-commentary-container',
  templateUrl: './commentary-container.component.html',
  styleUrls: ['./commentary-container.component.scss']
})
export class CommentaryContainerComponent implements OnInit, OnDestroy,  OnChanges{

  constructor(public cricketDataService: CricketDataService,
              public toastController: ToastController,
              public actionSheetController: ActionSheetController) {
    this.cricketDataService = cricketDataService;
  }

  @Input()
  public matchCommentary: Commentary;

  @Input()
  public live: boolean;

  public hasUpdate = false;

  public displayedInnings: Inning;

  private timer: NodeJS.Timer;

  private hasShownToastSinceLastRefresh = false;

  private dismissToast: () => void;

  private static totalBallsInInnings(innings): number {
    return innings.overs.map(over => over.balls.length)
      .reduce((sum, current) => sum + current, 0);
  }

  ngOnInit() {
    this.timer = setInterval(() => this.checkCommentaryForUpdate(), 10000);
  }

  ngOnChanges(): void {
    if (this.matchCommentary) {
      const inningsList = this.matchCommentary.commentary.innings;
      this.displayedInnings = inningsList[inningsList.length - 1];
    }
  }

  ngOnDestroy(): void {
    clearInterval(this.timer);
  }

  public refreshCommentary() {
    const meta = this.matchCommentary.meta;
    this.hasUpdate = false;
    this.dismissToast();
    this.cricketDataService.getCommentaryForMatchSeries(meta.matchId, meta.series.id)
      .then(freshCommentary => {
        this.matchCommentary.commentary.innings = freshCommentary.commentary.innings;
      });
  }

  private checkCommentaryForUpdate() {
    const meta = this.matchCommentary.meta;
    this.cricketDataService.getCommentaryForMatchSeries(meta.matchId, meta.series.id)
      .then(commentary => {
        if (this.isInningsUpdated(commentary, this.matchCommentary)) {
          this.hasUpdate = true;
          if (!this.hasShownToastSinceLastRefresh) {
            this.presentNewCommentsToast(() => {
              this.hasShownToastSinceLastRefresh = false;
              this.hasUpdate = false;
              this.refreshCommentary();
            });
          }
        }
      });
  }

  private isInningsUpdated(commentary: Commentary, other: Commentary): boolean {
    let numBalls = 0;
    let otherBalls = 0;

    commentary.commentary.innings.forEach(innings => {
      numBalls += CommentaryContainerComponent.totalBallsInInnings(innings);
    });

    other.commentary.innings.forEach(innings => {
      otherBalls += CommentaryContainerComponent.totalBallsInInnings(innings);
    });

    return numBalls !== otherBalls;
  }

  async presentNewCommentsToast(onShow: () => void) {
    this.hasShownToastSinceLastRefresh = true;
    const toast = await this.toastController.create({
      header: 'Commentary Updated',
      position: 'top',
      buttons: [
        {
          side: 'start',
          icon: 'chatbubbles',
          text: 'Show',
          handler: onShow
        }, {
          text: 'Dismiss',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    toast.present();
    this.dismissToast = () => toast.dismiss();
  }

  async presentActionSheet() {
    const buttons = this.matchCommentary.commentary.innings.map(innings => {
      const options: ActionSheetButton = new ActionSheetButtonImpl();
      options.text = innings.name;
      options.handler = () => { this.displayedInnings = innings; };
      return options;
    });

    const actionSheet = await this.actionSheetController.create({
      header: 'Show Innings',
      buttons
    });
    await actionSheet.present();
  }

}

class ActionSheetButtonImpl implements ActionSheetButton {
  cssClass: string | string[];
  handler: () => (boolean | void | Promise<boolean>);
  icon: string;
  role: 'cancel' | 'destructive' | 'selected' | string;
  text: string;
}
