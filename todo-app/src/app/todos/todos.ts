import { Component } from '@angular/core';
import { TodoInput } from "../todo-input/todo-input";
import { TodoList } from "../todo-list/todo-list";

export interface Todo {
    id: number;
    title: string;
}

@Component({
    selector: 'app-todos',
    imports: [TodoInput, TodoList],
    templateUrl: './todos.html',
    styleUrl: './todos.css',
})
export class Todos {
    todos: Todo[] = [];

    addTodo(title: string) {
        this.todos.push({
            id: Date.now(),
            title: title
        });
    }
}
