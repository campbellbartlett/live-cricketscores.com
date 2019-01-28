import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-social-icon',
  templateUrl: './social-icon.component.html',
  styleUrls: ['./social-icon.component.scss']
})
export class SocialIconComponent implements OnInit {

  @Input("socialURI") socialURI: string;
  @Input("iconClass") iconClass:string;

  constructor() { }

  ngOnInit() {
  }

}
