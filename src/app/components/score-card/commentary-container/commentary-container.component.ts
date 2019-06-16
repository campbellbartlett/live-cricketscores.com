import {Component, Input, OnChanges, OnDestroy, OnInit} from '@angular/core';
import {Commentary, Inning} from 'src/app/models/commentary';
import {CricketDataService} from '../../../services/cricket-data.service';
import {ToastController} from '@ionic/angular';


@Component({
  selector: 'app-commentary-container',
  templateUrl: './commentary-container.component.html',
  styleUrls: ['./commentary-container.component.scss']
})
export class CommentaryContainerComponent implements OnInit, OnDestroy, OnChanges {

  constructor(public cricketDataService: CricketDataService,
              public toastController: ToastController) {
    this.cricketDataService = cricketDataService;
  }

  @Input()
  public matchCommentary: Commentary;

  @Input()
  public switchToTab: any;

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
            this.showNewCommentaryToast();
          }
        }
      });
  }

  private showNewCommentaryToast() {
    this.presentNewCommentsToast(() => {
      this.handleShowCommentaryClicked();
    });
  }

  private handleShowCommentaryClicked() {
    this.hasShownToastSinceLastRefresh = false;
    this.hasUpdate = false;
    this.refreshCommentary();
    this.switchToTab();
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

  inningsSelected = event => {
    for (const innings of this.matchCommentary.commentary.innings) {
      if (innings.id === +event.target.value) {
        this.displayedInnings = innings;
      }
    }
  };

  async presentNewCommentsToast(onShow: () => void) {
    this.hasShownToastSinceLastRefresh = true;
    const toast = await this.toastController.create({
      header: 'Commentary Updated',
      position: 'bottom',
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
}
