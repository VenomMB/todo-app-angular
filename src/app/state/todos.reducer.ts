import { createReducer, on } from '@ngrx/store';
import { Todo } from '../types/todo';
import { TodosApiActions } from './todos.actions';

export const initialState: ReadonlyArray<Todo> = [];

export const todosReducer = createReducer(
  initialState,
  on(TodosApiActions.retrievedTodoList, (_state, { todos }) => todos)
);
