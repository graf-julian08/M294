import { Component, Input } from '@angular/core';
import { Todo } from '../todos/todos';

@Component({
  selector: 'app-todo-list',
  imports: [],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.css',
})
export class TodoList {
  @Input() todos: Todo[] = [];
}
