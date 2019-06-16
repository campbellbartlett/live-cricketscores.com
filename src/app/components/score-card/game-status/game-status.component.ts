import { Component, OnInit, Input } from '@angular/core';
import { Match } from 'src/app/models';

@Component({
  selector: 'app-game-status',
  templateUrl: './game-status.component.html',
  styleUrls: ['./game-status.component.scss'],
})
export class GameStatusComponent implements OnInit {

  @Input() public match: Match;

  constructor() { }

  ngOnInit() {}

}
