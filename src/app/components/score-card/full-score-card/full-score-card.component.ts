import { Commentary } from './../../../models/commentary';
import { MatchSubject } from './../../../models/matchSubject';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CricketDataService } from 'src/app/services/cricket-data.service';
import { FullScoreCard } from 'src/app/models/scorecard';
import { Match } from 'src/app/models/match';
import { isEmpty } from 'src/app/utils/ObjectUtils';

var moment = require('moment');

@Component({
  selector: 'app-full-score-card',
  templateUrl: './full-score-card.component.html',
  styleUrls: ['./full-score-card.component.scss']
})
export class FullScoreCardComponent implements OnInit {

  public scorecard: FullScoreCard;
    
  public match: Match;
  public matchCommentary: Commentary;

  private timer: NodeJS.Timer;
  private matchId: number;
  private seriesId: number;

  public live: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<FullScoreCardComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private cricketDataService: CricketDataService,
  ) { }

  ngOnInit() {
    this.setUpMatch(this.data.matchSubject.match);
    this.data.matchSubject.subject.subscribe(match => this.match = match);
  }

  ngOnDestroy() {
    clearInterval(this.timer);
  }

  closeDialog() {
    this.dialogRef.close();
  }

  private setUpMatch(match: Match) {
    this.seriesId = match.series.id;
    this.matchId = match.id;
    this.match = match;
    this.getScore();
    this.getCommentary();
    this.timer = setInterval(() => this.refresh(), 10000);    
  }

  private refresh() {
    if (!this.isMatchLive()) {
      return;
    }
    this.getScore();
    this.getCommentary();
  }

  private getCommentary() {
    this.cricketDataService.getCommentaryForMatchSeries(this.matchId, this.seriesId)
      .then(commentary => this.matchCommentary = commentary);
  }

  private getScore() {
    this.live = this.isMatchLive();
    this.cricketDataService.getScorecardForMatchSeries(this.matchId, this.seriesId)
      .then(response => {
        if (isEmpty(response)) {
          this.live = false;
          return;
        }
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

  private isMatchLive(): boolean {
    return !(moment(this.match.startDateTime) > moment() || this.match.status != 'LIVE');
  }
}