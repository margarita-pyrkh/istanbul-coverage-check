import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'istanbul-coverage-test';
  title2 = 'istanbul-coverage-test';

  simpleMethod(): string {
    debugger;
    return this.title;
  }
}
