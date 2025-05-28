import { Component, inject } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { Links } from './links/links';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Links],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'app';
  private readonly router = inject(Router);

  ngOnInit() {
    this.router.events.pipe().subscribe((e) => {
      if (e instanceof NavigationEnd) {
        triggerPageChange();
      }
    });
  }
}

declare interface MyWin extends Window {
  dataLayer: any;
}

function triggerPageChange() {
  (window as unknown as MyWin).dataLayer ||= [];
  (window as unknown as MyWin).dataLayer.push({ event: 'spaPageChange' });
}
