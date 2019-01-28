import { Component, OnInit, Input } from '@angular/core';
import { Innings } from 'src/app/models/scorecard';


@Component({
  selector: 'app-batting-table',
  templateUrl: './batting-table.component.html',
  styleUrls: ['./batting-table.component.scss']
})

export class BattingTableComponent implements OnInit {

  @Input("inning") 
  public inning: Innings;
  public displayedColumns: string[] = ['name', 'runs', 'balls', '4s', '6s', 'strikeRate'];

  constructor() { }

  ngOnInit() {
  }

}
