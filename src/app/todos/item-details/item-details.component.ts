import { TodoItem } from '../todos.models';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-details',
  template: `
    <h2>
      Todo {{todo.guid}}
    </h2>
    <p>{{todo.todo}}</p>

    <hr />
    <pre><code>{{todo | json}}</code></pre>
  `,
  styles: []
})
export class ItemDetailsComponent implements OnInit {

  @Input() todo: TodoItem;

  constructor() { }

  ngOnInit() {
  }

}
