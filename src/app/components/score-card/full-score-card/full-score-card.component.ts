import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CricketDataService } from 'src/app/services/cricket-data.service';
import { FullScoreCard, ScoreCard } from 'src/app/models/scorecard';

@Component({
  selector: 'app-full-score-card',
  templateUrl: './full-score-card.component.html',
  styleUrls: ['./full-score-card.component.scss']
})
export class FullScoreCardComponent implements OnInit {

  public scorecard: FullScoreCard;

  private timer: NodeJS.Timer;
  private match: number;
  private series: number;

  constructor(
    public dialogRef: MatDialogRef<FullScoreCardComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private cricketDataService: CricketDataService,
  ) { }

  ngOnInit() {
    this.series = this.data.match.series.id;
    this.match = this.data.match.id;
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
    this.cricketDataService.getScorecardForMatchSeries(this.match, this.series)
      .then(response => {
        response.fullScorecard.innings.reverse();
        const updatedScoreCard = response.fullScorecard;
        if (this.scorecard) {
          if (this.scorecard.innings.length != updatedScoreCard.innings.length) {
            this.scorecard = updatedScoreCard;
          } else {
            const updatedInnings = updatedScoreCard.innings[updatedScoreCard.innings.length - 1];
            const currentInnings = this.scorecard.innings[this.scorecard.innings.length - 1];
            currentInnings.batsmen = updatedInnings.batsmen;
            currentInnings.bowlers = updatedInnings.bowlers;
          }
        } else {
          this.scorecard = updatedScoreCard;
        }
      });
  }
}