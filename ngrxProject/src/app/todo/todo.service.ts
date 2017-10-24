import { Injectable } from '@angular/core';
import { Todo } from './todo.class';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class TodoService {
    constructor() {}

    getTodos(): Observable<Todo[]> {
        return Observable.of([
            new Todo('Купить хлеб', false),
            new Todo('Починить люстру', true)
        ]);
    }
}
