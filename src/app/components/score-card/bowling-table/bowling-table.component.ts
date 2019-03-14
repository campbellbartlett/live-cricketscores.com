import { Component, OnInit, Input } from '@angular/core';
import { Innings } from 'src/app/models/scorecard';

@Component({
  selector: 'app-bowling-table',
  templateUrl: './bowling-table.component.html',
  styleUrls: ['./bowling-table.component.scss']
})
export class BowlingTableComponent implements OnInit {

  @Input("inning") 
  public inning: Innings;
  public displayedColumns: string[] = ['name', 'overs', 'runs', 'noBalls', 'wides', 'maidens', 'econRate', 'wickets'];

  constructor() { }

  ngOnInit() {
  }

}
