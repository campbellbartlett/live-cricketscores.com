import { Component, OnInit, Input } from '@angular/core';
import { Match } from 'src/app/models';
import { Inning } from 'src/app/models/commentary';

@Component({
  selector: 'app-innings-score-card',
  templateUrl: './innings-score-card.component.html',
  styleUrls: ['./innings-score-card.component.scss'],
})
export class InningsScoreCardComponent implements OnInit {

  @Input() match: Match;

  @Input() inning: Inning;

  constructor() { }

  ngOnInit() {}

}
