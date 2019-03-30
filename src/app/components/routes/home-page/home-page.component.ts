import { Component, OnInit } from '@angular/core';
import { CricketDataService } from 'src/app/services/cricket-data.service';
import { Match } from '../../../models/index';
import { isEmpty } from 'src/app/utils/ObjectUtils';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  providers: [CricketDataService]
})
export class HomePageComponent implements OnInit {

  public matches: [Match];

  constructor(
    private cricketDataService: CricketDataService) { }

  ngOnInit() {
    console.log("Getting matches");
    this.cricketDataService.getCurrentMatches()
    .then(matchResponse => {
      this.matches = matchResponse.matchList.matches;
      this.matches.forEach(match => {
        if (match.matchSummaryText === "") {
          //Match has not started yet
        }
      });
    });
  }

}
