import { Component, OnInit, Input } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { Match } from 'src/app/models/match';
import { FullScoreCardComponent } from '../full-score-card/full-score-card.component';

@Component({
  selector: 'app-mini-score-card',
  templateUrl: './mini-score-card.component.html',
  styleUrls: ['./mini-score-card.component.scss']
})
export class MiniScoreCardComponent implements OnInit {

  @Input("match") match: Match;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  showDialog() {
    this.dialog.open(FullScoreCardComponent, {
      width: '80%',
      height: '80%',
      data: { match: this.match }
    });
  }

}
