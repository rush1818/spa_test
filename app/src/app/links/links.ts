import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-links',
  imports: [RouterLink],
  template: `
    <nav>
      <a routerLink="/">Home</a>
      <a routerLink="/1">Route1</a>
      <a routerLink="/2">Route2</a>
      <a routerLink="/3">Route3</a>
    </nav>
  `,
  styles: `a{margin-left: 8px;}`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Links {}
