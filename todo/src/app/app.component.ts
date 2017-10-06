import { Component } from '@angular/core';

import { Todo } from './todo/todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  todos: Array<Todo>;
  editingTodo: Todo;
  newTodoText: string;


  constructor () {
    this.todos = [
      new Todo('Walk on by'),
      new Todo('Talk with the dead')
    ];
  }

  addTodo() {
    this.todos.push(new Todo(this.newTodoText));
  }

  editTodoText(todo: Todo) {
    if (this.editingTodo === todo) {
      this.editingTodo = undefined;
    } else {
      this.editingTodo = todo;
    }
  }
}
