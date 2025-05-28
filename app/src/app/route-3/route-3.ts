import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-route-3',
  imports: [],
  template: `
    <p>
      route-3 works!
    </p>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Route3 {

}
