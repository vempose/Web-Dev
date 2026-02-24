import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  template: ``
})
export class App {
  protected readonly title = signal('online-store');
}
