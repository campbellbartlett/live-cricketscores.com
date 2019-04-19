import { Component, OnInit, Input } from '@angular/core';
import { Commentary } from 'src/app/models/commentary';

@Component({
  selector: 'app-commentary-container',
  templateUrl: './commentary-container.component.html',
  styleUrls: ['./commentary-container.component.scss']
})
export class CommentaryContainerComponent implements OnInit {

  @Input()
  public matchCommentary: Commentary;

  constructor() { }

  ngOnInit() {
  }

}
