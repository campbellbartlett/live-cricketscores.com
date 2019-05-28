import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Inning, Over} from 'src/app/models/commentary';
import {IonInfiniteScroll} from '@ionic/angular';

@Component({
  selector: 'app-innings-commentary',
  templateUrl: './innings-commentary.component.html',
  styleUrls: ['./innings-commentary.component.scss']
})
export class InningsCommentaryComponent implements OnInit {

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  @Input()
  public hasUpdate: boolean;

  @Output()
  refreshEvent = new EventEmitter<any>();

  public overs: Array<Over> = [];

  private _innings: Inning;

  constructor() { }

  ngOnInit() {
    this.infiniteScroll.disabled = false;
  }

  @Input()
  public set innings(innings: Inning) {
    if (innings) {
      for (let i = 0; i < 2; i++) {
        this.overs.push(innings.overs[i]);
      }
    }
    this._innings = innings;
  }

  loadData(event) {
      for (let i = 0; i < 1; i++) {
        this.overs.push(this._innings.overs[this.overs.length + i]);
      }
      event.target.complete();

      if (this.overs.length === this._innings.overs.length) {
        event.target.disabled = true;
      }
  }

  refresh() {
    this.refreshEvent.next();
  }

}
