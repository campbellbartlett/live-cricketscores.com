import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector   : 'app-header',
  templateUrl: './header.component.html',
  styleUrls  : ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  private routerEvents: any;
  private currentUrl: string;
  public canGoBack: boolean;

  private nonRootRoutes = ['/', '/about', '/news'];

  constructor(
    private router: Router
  ) {

  }

  ngOnInit() {
    this.currentUrl   = this.router.url;
    this.canGoBack    = !this.isUrlRoot(this.currentUrl);
    this.routerEvents = this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currentUrl  = event.url;
        this.canGoBack   = !this.isUrlRoot(this.currentUrl);
      }
    });
  }

  private isUrlRoot(currentUrl: string) {
    console.log(currentUrl);
    return this.nonRootRoutes.some(url => url === currentUrl);
  }

  ngOnDestroy() {
    this.routerEvents.unsubscribe();
  }

}
