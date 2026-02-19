import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  template: ` Username: {{ username }} `,
})
export class User {
  username = 'youngTech';
}

@Component({
  selector: 'app-step3',
  template: `<section><app-user /></section>`,
  imports: [User]
})
export class Step3 {}
