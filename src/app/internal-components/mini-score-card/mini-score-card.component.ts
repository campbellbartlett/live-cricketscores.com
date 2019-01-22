import { Component, OnInit, Input } from '@angular/core';
import { Match } from 'src/app/match';

@Component({
  selector: 'app-mini-score-card',
  templateUrl: './mini-score-card.component.html',
  styleUrls: ['./mini-score-card.component.scss']
})
export class MiniScoreCardComponent implements OnInit {

  @Input("match") match: Match;

  constructor() { }

  ngOnInit() {
    console.log("Created score card with match")
    console.log(this.match);
    console.log(this.match.venue.name)
  }

}
