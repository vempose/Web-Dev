import { Component } from '@angular/core';

@Component({
  selector: 'app-step4',
  template: `
    @if (isServerRunning) {
      <p>Yes, the server is running</p>
    } @else {
      <p>Nope, the server is <b>not</b> running</p>
    }
  `,

})
export class Step4 {
  isServerRunning = false
}
