import {Component, input} from '@angular/core';

@Component({
  selector: 'app-step8',
  template: ` <p>The user's name is {{ name() }}</p> `,
})
export class Step8 {
  readonly name = input<string>();
}
