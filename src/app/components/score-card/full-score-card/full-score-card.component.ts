import { Commentary } from '../../../models/commentary';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { CricketDataService } from 'src/app/services/cricket-data.service';
import { FullScoreCard } from 'src/app/models/scorecard';
import { Match } from 'src/app/models/match';
import { isEmpty } from 'src/app/utils/ObjectUtils';
import { ActivatedRoute } from '@angular/router';

const moment = require('moment');

@Component({
  selector: 'app-full-score-card',
  templateUrl: './full-score-card.component.html',
  styleUrls: ['./full-score-card.component.scss']
})
export class FullScoreCardComponent implements OnInit, OnDestroy {

  public scorecard: FullScoreCard;

  public match: Match;
  public matchCommentary: Commentary;

  private timer: NodeJS.Timer;
  private matchId: number;
  private seriesId: number;

  public live = false;

  public selectedTab: number;

  public newCommentCount = 0;

  constructor(
    private cricketDataService: CricketDataService,
    private route: ActivatedRoute
  ) {
    this.route.queryParams.subscribe(params => {
      this.matchId = params.matchId;
      this.seriesId = params.seriesId;
    });
  }

  ngOnInit() {
    this.cricketDataService.getMatch(this.seriesId, this.matchId).then(match => {
      this.match = match;
      this.setUpMatch();
    });
  }

  ngOnDestroy() {
    clearInterval(this.timer);
  }

  private setUpMatch() {
    this.getScore();
    this.getCommentary();
    this.timer = setInterval(() => this.refresh(), 10000);
  }

  private refresh() {
    if (!this.isMatchLive()) {
      return;
    }
    this.getScore();
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
          this.selectedTab = this.scorecard.innings.length;
          return;
        }

        if (this.scorecard.innings.length !== updatedScoreCard.innings.length) {
          this.scorecard = updatedScoreCard;
        } else {
          this.mergeNewScoreCard(updatedScoreCard);
        }
      });
  }

  private mergeNewScoreCard(updatedScoreCard: FullScoreCard) {
    const updatedInnings = updatedScoreCard.innings[updatedScoreCard.innings.length - 1];
    const currentInnings = this.scorecard.innings[this.scorecard.innings.length - 1];
    currentInnings.batsmen = updatedInnings.batsmen;
    currentInnings.bowlers = updatedInnings.bowlers;
    currentInnings.over = updatedInnings.over;
    currentInnings.run = updatedInnings.run;
    currentInnings.wicket = updatedInnings.wicket;
  }

  private isMatchLive(): boolean {
    return this.match && !(moment(this.match.startDateTime) > moment() || this.match.status !== 'LIVE');
  }

  public tabChanged(event): void {
    this.selectedTab = event.currentTarget.value;
  }

  public switchToCommentaryTab = () => {
    this.selectedTab = this.scorecard.innings.length + 1;
  }

  public updateCommentCount(numberOfNewComments) {
    this.newCommentCount = numberOfNewComments;
  }
}
