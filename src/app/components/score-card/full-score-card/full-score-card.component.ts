import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CricketDataService } from 'src/app/services/cricket-data.service';
import { FullScoreCard } from 'src/app/models/scorecard';

@Component({
  selector: 'app-full-score-card',
  templateUrl: './full-score-card.component.html',
  styleUrls: ['./full-score-card.component.scss']
})
export class FullScoreCardComponent implements OnInit {

  public scorecard: FullScoreCard;

  constructor(
    public dialogRef: MatDialogRef<FullScoreCardComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private cricketDataService: CricketDataService,
  ) { }

  ngOnInit() {
    console.log(this.data);
    const series: number = this.data.match.series.id;
    const match: number = this.data.match.id;
    this.cricketDataService.getScorecardForMatchSeries(match, series)
      .then(response => {
        this.scorecard = response.fullScorecard;
      });
  }
}
