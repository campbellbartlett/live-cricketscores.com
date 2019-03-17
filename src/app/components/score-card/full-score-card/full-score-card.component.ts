import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CricketDataService } from 'src/app/services/cricket-data.service';
import { FullScoreCard } from 'src/app/models/scorecard';
import { Match } from 'src/app/models/match';

@Component({
  selector: 'app-full-score-card',
  templateUrl: './full-score-card.component.html',
  styleUrls: ['./full-score-card.component.scss']
})
export class FullScoreCardComponent implements OnInit {

  public scorecard: FullScoreCard;
  public match: Match;

  private timer: NodeJS.Timer;
  private matchId: number;
  private seriesId: number;

  constructor(
    public dialogRef: MatDialogRef<FullScoreCardComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private cricketDataService: CricketDataService,
  ) { }

  ngOnInit() {
    this.seriesId = this.data.match.series.id;
    this.matchId = this.data.match.id;
    this.match = this.data.match;
    this.updateScore()
    this.timer = setInterval(() => this.updateScore(), 10000);
  }

  ngOnDestroy() {
    clearInterval(this.timer);
  }

  closeDialog() {
    this.dialogRef.close();
  }

  updateScore() {
    this.cricketDataService.getScorecardForMatchSeries(this.matchId, this.seriesId)
      .then(response => {
        response.fullScorecard.innings.reverse();
        const updatedScoreCard = response.fullScorecard;

        if (!this.scorecard) {
          this.scorecard = updatedScoreCard;
          return;
        }

        if (this.scorecard.innings.length != updatedScoreCard.innings.length) {
          this.scorecard = updatedScoreCard;
        } else {
          const updatedInnings = updatedScoreCard.innings[updatedScoreCard.innings.length - 1];
          const currentInnings = this.scorecard.innings[this.scorecard.innings.length - 1];
          currentInnings.batsmen = updatedInnings.batsmen;
          currentInnings.bowlers = updatedInnings.bowlers;
          currentInnings.over = updatedInnings.over;
          currentInnings.run = updatedInnings.run;
          currentInnings.wicket = updatedInnings.wicket;
        }
      });
  }
}