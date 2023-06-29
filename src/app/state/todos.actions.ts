import {createActionGroup, props } from '@ngrx/store';
import { Todo } from '../types/todo';

export const TodosActions = createActionGroup({
  source: 'Todos',
  events: {
    'Add Todo': props<{todoId: string}>(),
    'Remove Todo': props<{todoId: string}>(),
  }
})

export const TodosApiActions = createActionGroup({
  source: 'Todos API',
  events: {
    'Retrieved Todo List': props<{ todos: ReadonlyArray<Todo> }>(),
  },
});
