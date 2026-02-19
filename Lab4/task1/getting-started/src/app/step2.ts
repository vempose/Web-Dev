import { Component } from '@angular/core';

@Component({
  selector: 'app-step2',
  template: ` Hello, {{ city }}. 1 + 1 = {{ 1 + 1 }}`,
})
export class Step2 {
  city = "Almaty"
}
