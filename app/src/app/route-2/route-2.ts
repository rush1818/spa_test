import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-route-2',
  imports: [],
  template: `
    <p>
      route-2 works!
    </p>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Route2 {

}
