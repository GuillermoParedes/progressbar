import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'progressio';
  value: number = 10;
  code = `
    export model = new Model({
      a:1,
      b:function(){}
    })
  `;

  constructor() {}

  increment() {
    this.value = this.value + 10;
  }
  changedProgressbar($event) {
    console.log('changedProgressbar', $event);
  }
  completedProgressbar($event) {
    console.log('completedProgressbar', $event);
  }
}
