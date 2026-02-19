import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Step1} from './step1';
import {Step2} from './step2';
import {Step3} from './step3';
import {Step4} from './step4';
import {Step5} from './step5';
import {Step6} from './step6';
import {Step7} from './step7';
import {Step8} from './step8';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Step1, Step2, Step3, Step4, Step5, Step6, Step7, Step8],
  templateUrl: 'app.html',
})
export class App {
  protected readonly title = signal('getting-started');
}
