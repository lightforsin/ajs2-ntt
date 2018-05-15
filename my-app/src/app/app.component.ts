import { Component } from '@angular/core';
import { TestService } from './test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'AJS2 app 23';
  myName: string = '';

  constructor(public testService: TestService) {}

  click() {
    this.title = "I was clicked";
  }

  update(name: string) {
    this.myName = name;
  }
}
