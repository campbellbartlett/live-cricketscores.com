import { Component, OnInit, Input } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Match } from 'src/app/models/match';
import { MatchSubject } from './../../../models/matchSubject';
import { FullScoreCardComponent } from '../full-score-card/full-score-card.component';

@Component({
  selector: 'app-mini-score-card',
  templateUrl: './mini-score-card.component.html',
  styleUrls: ['./mini-score-card.component.scss']
})
export class MiniScoreCardComponent implements OnInit {

  @Input()
  public matchSubject: MatchSubject;

  public match: Match;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    this.match = this.matchSubject.match;
    this.matchSubject.subject.subscribe(match => this.match = match);
  }

  showDialog() {
    this.dialog.open(FullScoreCardComponent, {
      panelClass: 'score-card-dialog',
      width: '80%',
      height: '80%',
      data: { matchSubject: this.matchSubject }
    });
  }

}
