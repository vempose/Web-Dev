import { Component } from '@angular/core';

@Component({
  selector: 'app-step6',
  template: `<div [contentEditable]="isEditable">Something</div>`,
  styles: ``,
})
export class Step6 {
  isEditable = true
}
