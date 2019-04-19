import { Comment, Over, Ball } from './../../../models/commentary';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-commentary-card',
  templateUrl: './commentary-card.component.html',
  styleUrls: ['./commentary-card.component.scss']
})
export class CommentaryCardComponent implements OnInit {

  @Input()
  public comments: [Comment];
  @Input()
  public over: Over;
  @Input()
  public ball: Ball;

  constructor() { }

  ngOnInit() {
  }

}
