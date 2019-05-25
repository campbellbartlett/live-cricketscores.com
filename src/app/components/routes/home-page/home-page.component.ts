import { MatchSubject } from '../../../models/matchSubject';
import {Component, OnDestroy, OnInit} from '@angular/core';
import { CricketDataService } from 'src/app/services/cricket-data.service';
import { Match } from '../../../models';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  providers: [CricketDataService]
})
export class HomePageComponent implements OnInit, OnDestroy {

  public matches: Array<MatchSubject>;

  private timer: NodeJS.Timer;

  constructor(
    private cricketDataService: CricketDataService) { }

  ngOnInit() {
    console.log('Getting matches');
    this.getMatches();
    this.timer = setInterval(() => this.updateMatches(), 30000);
  }

  ngOnDestroy() {
    clearInterval(this.timer);
  }

  private updateMatches() {
    this.cricketDataService.getCurrentMatches()
    .then(matchResponse => {
      const updatedMatches = matchResponse.matchList.matches;

      this.removeOldMatches(updatedMatches);

      this.addNewMatches(updatedMatches);

      this.notifySubscribers(updatedMatches);

    });
  }

  private notifySubscribers(updatedMatches: [Match]) {
    this.matches.forEach(match => {
      updatedMatches.forEach(updatedMatch => {
        if (match.match.id === updatedMatch.id) {
          match.subject.next(updatedMatch);
        }
      });
    });
  }

  private addNewMatches(updatedMatches: [Match]) {
    if (updatedMatches.length > this.matches.length) {
      updatedMatches.forEach(updatedMatch => {
        if (!this.matches.some(match => updatedMatch.id === match.match.id)) {
          this.matches.push(new MatchSubject(updatedMatch));
        }
      });
    }
  }

  private removeOldMatches(updatedMatches: [Match]) {
    if (this.matches.length > updatedMatches.length) {
      this.matches.forEach(matchSubject => {
        if (!updatedMatches.some(updatedMatch => matchSubject.match.id === updatedMatch.id)) {
          this.matches.splice(this.matches.indexOf(matchSubject));
        }
      });
    }
  }

  private getMatches() {
    this.cricketDataService.getCurrentMatches()
    .then(matchResponse => {
      this.matches = this.matchesIntoSubjects(matchResponse.matchList.matches);
    });
  }

  private matchesIntoSubjects(matches: Array<Match>): Array<MatchSubject> {
      const matchSubjects: Array<MatchSubject> = [];
      matches.forEach(match => {
        matchSubjects.push(new MatchSubject(match));
      });
      return matchSubjects;
  }

}
