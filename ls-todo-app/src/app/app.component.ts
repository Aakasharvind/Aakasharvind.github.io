import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ls-todo-app';
  constructor() {

    setTimeout(() => {
      this.title = "New title";
    }, 2000);
  }
}
