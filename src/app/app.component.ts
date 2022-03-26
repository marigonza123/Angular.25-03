import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  public items = ['item 1', 'item 2', 'item 3', 'item 4'];
  public tarefa = '';

  addTarefa() {
    this.items.push(this.tarefa);
  }

  removeTarefa(item) {
    this.items.splice(this.items.indexOf(item), 1);
  }
}
