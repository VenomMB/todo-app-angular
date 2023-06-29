import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { TodoActionTypes, LoadTodos, AddTodo, DeleteTodo, LoadTodosSuccess, AddTodoSuccess, DeleteTodoSuccess, LoadTodosFailure, AddTodoFailure, DeleteTodoFailure } from './todo.actions';

@Injectable()
export class TodoEffects {
  loadTodos$ = createEffect(() =>
    this.actions$.pipe(
      ofType<LoadTodos>(TodoActionTypes.LoadTodos),
      mergeMap(action =>
        this.todoService.getTodos(action.payload).pipe(
          map(todos => new LoadTodosSuccess(todos)),
          catchError(error => of(new LoadTodosFailure(error)))
        )
      )
    )
  );

  addTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType<AddTodo>(TodoActionTypes.AddTodo),
      mergeMap(action =>
        this.todoService.addTodo(action.payload).pipe(
          map(todo => new AddTodoSuccess(todo)),
          catchError(error => of(new AddTodoFailure(error)))
        )
      )
    )
  );

  deleteTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType<DeleteTodo>(TodoActionTypes.DeleteTodo),
      mergeMap(action =>
        this.todoService.deleteTodo(action.payload).pipe(
          map(() => new DeleteTodoSuccess(action.payload)),
          catchError(error => of(new DeleteTodoFailure(error)))
        )
      )
    )
  );

  constructor(private actions$: Actions, private todoService: TodoService) {}
}
