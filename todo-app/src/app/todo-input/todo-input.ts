import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-input',
  imports: [],
  templateUrl: './todo-input.html',
  styleUrl: './todo-input.css',
})
export class TodoInput {
  @Output() todoAdded = new EventEmitter<string>();

  add(title: string) {
    if (title) {
      this.todoAdded.emit(title);
    }
  }
}
