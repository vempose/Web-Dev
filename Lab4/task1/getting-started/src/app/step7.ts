import { Component } from '@angular/core';

@Component({
  selector: 'app-step7',
  template: `
    <section (mouseover)="showSecretMessage()">
      There's something for you! Just hover over it ;)
      {{message}}
    </section>
  `,
  styles: ``,
})
export class Step7 {
  message = '';

  showSecretMessage() {
    this.message = 'Way to go 🚀';
  }
}
