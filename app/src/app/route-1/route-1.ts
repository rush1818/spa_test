import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-route-1',
  imports: [],
  template: `
    <p>
      route-1 works!
    </p>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Route1 {

}
