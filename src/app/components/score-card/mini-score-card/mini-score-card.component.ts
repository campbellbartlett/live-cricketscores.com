import { FullScoreCard } from './../../../models/scorecard';
import { Component, OnInit, Input } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Match } from 'src/app/models/match';
import { MatchSubject } from './../../../models/matchSubject';
import { FullScoreCardComponent } from '../full-score-card/full-score-card.component';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-mini-score-card',
  templateUrl: './mini-score-card.component.html',
  styleUrls: ['./mini-score-card.component.scss']
})
export class MiniScoreCardComponent implements OnInit {

  @Input()
  public matchSubject: MatchSubject;

  public match: Match;

  constructor(public dialog: MatDialog,
    private modalController: ModalController) { }

  ngOnInit() {
    this.match = this.matchSubject.match;
    this.matchSubject.subject.subscribe(match => this.match = match);
  }

  async showDialog() {
    const modal = await this.modalController.create({
      component: FullScoreCardComponent,
      componentProps: {
        'matchSubject': this.matchSubject
      }
    });
    await modal.present();
  }

}
