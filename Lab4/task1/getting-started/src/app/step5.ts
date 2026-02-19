import { Component } from '@angular/core';

@Component({
  selector: 'app-step5',
  template: `
    @for (user of users; track user.id) {
      <p>Hi, {{ user.name }}!</p>
    }
  `,

})
export class Step5 {
  users = [
    {id: 0, name: 'Sarah'},
    {id: 1, name: 'Amy'},
    {id: 2, name: 'Rachel'},
    {id: 3, name: 'Jessica'},
    {id: 4, name: 'Poornima'},
  ];
}
