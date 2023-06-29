import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Todo } from '../types/todo';

export const selectTodos = createFeatureSelector<ReadonlyArray<Todo>>('todos');

export const selectCollectionState = createFeatureSelector<
  ReadonlyArray<string>
>('collection');

export const selectTodosCollection = createSelector(
  selectTodos,
  selectCollectionState,
  (todos, collection) => {
    return collection.map((id) => todos.find((todo) => todo.id === +id)!);
  }
);
