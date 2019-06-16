import {Component, Input, OnChanges, OnDestroy, OnInit, EventEmitter, Output} from '@angular/core';
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

  @Output()
  newCommentEvent = new EventEmitter<any>();

  public hasUpdate = false;

  public displayedInnings: Inning;

  private timer: NodeJS.Timer;

  private static totalBallsInInnings(innings): number {
    return innings.overs.map(over => over.balls.length)
      .reduce((sum, current) => sum + current, 0);
  }

  private static getNewCommentCount(newCommentary: Commentary, oldCommentary: Commentary): number {
    let newBalls = 0;
    let oldBalls = 0;

    newCommentary.commentary.innings.forEach(innings => {
      newBalls += CommentaryContainerComponent.totalBallsInInnings(innings);
    });

    oldCommentary.commentary.innings.forEach(innings => {
      oldBalls += CommentaryContainerComponent.totalBallsInInnings(innings);
    });

    return newBalls - oldBalls;
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
    this.cricketDataService.getCommentaryForMatchSeries(meta.matchId, meta.series.id)
      .then(freshCommentary => {
        this.matchCommentary.commentary.innings = freshCommentary.commentary.innings;
      });
      this.newCommentEvent.emit(0);
  }

  private checkCommentaryForUpdate() {
    const meta = this.matchCommentary.meta;
    this.cricketDataService.getCommentaryForMatchSeries(meta.matchId, meta.series.id)
      .then(commentary => {
        const newCommentCount = CommentaryContainerComponent.getNewCommentCount(commentary, this.matchCommentary);
        if (newCommentCount > 0) {
          this.hasUpdate = true;
          this.newCommentEvent.emit(newCommentCount);
        }
      });
  }

  inningsSelected = event => {
    for (const innings of this.matchCommentary.commentary.innings) {
      if (innings.id === +event.target.value) {
        this.displayedInnings = innings;
      }
    }
  };
}
