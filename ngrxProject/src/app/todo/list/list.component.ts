import { Component, OnInit } from '@angular/core';
import { AppState } from '../../app.state.class';
import { Store } from '@ngrx/store';
import { TodoActions } from '../todo.actions';
import { Todo } from '../todo.class';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

@Component({
    selector: 'app-todo-list',
    templateUrl: './list.component.html',
    styleUrls: [
        './list.component.sass'
    ]
})
export class TodoListComponent implements OnInit {
    todos: Observable<Todo[]>;
    constructor(private store: Store<AppState>) {}

    ngOnInit() {
        this.todos = this.store.select('todos').map(el => <Todo[]>el);
        this.store.dispatch({ type: TodoActions.FETCHING_TODOS });
        this.todos.subscribe(val => {
            console.log(val);
        });
    }
}
