import {Component, Input, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {Match} from 'src/app/models/match';
import {MatchSubject} from '../../../models/matchSubject';
import {ModalController, NavController} from '@ionic/angular';
import {NavigationExtras} from '@angular/router';

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
              private modalController: ModalController,
              private navCtrl: NavController
  ) { }

  ngOnInit() {
    this.match = this.matchSubject.match;
    this.matchSubject.subject.subscribe(match => this.match = match);
  }

  showScoreCard() {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        matchId: this.match.id,
        seriesId: this.match.series.id
      }
    };
    this.navCtrl.navigateForward('/scoreCard', navigationExtras);
  }

}
