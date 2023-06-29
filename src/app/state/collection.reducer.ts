import { createReducer, on } from '@ngrx/store';
import { TodosActions } from './todos.actions';
import { Todo } from '../types/todo';

export const initialState: ReadonlyArray<Todo> = [];

export const collectionReducer = createReducer(
  initialState,
  on(TodosActions.removeTodo, (state, { todoId }) =>
    state.filter((id) => id !== todoId)
  ),
  on(TodosActions.addTodo, (state, { todoId }) => {
    if (state.indexOf(todoId) > -1) return state;

    return [...state, todoId];
  })
);
