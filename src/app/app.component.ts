import { Component, OnInit } from '@angular/core';
import { Todo } from './types/todo';
import { TodosService } from './services/todos.service';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectTodos, selectTodosCollection } from './state/todos.selectors';
import { TodosActions, TodosApiActions } from './state/todos.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  todos$ = this.store.select(selectTodos);
  todosCollection$ = this.store.select(selectTodosCollection);

  addTodo(todoId: string) {
    console.log(todoId)
    this.store.dispatch(TodosActions.addTodo({ todoId }));
  }

  deleteTodo(todoId: string) {
    this.store.dispatch(TodosActions.removeTodo({ todoId }));
  }

  // todos$ = this.todosService.todos$;
  // activeTodos$ = this.todos$.pipe(
  //   map(todos => todos.filter(todo => !todo.completed))
  // );

  // activeCount$ = this.activeTodos$.pipe(
  //   map(todos => todos.length)
  // );

  // completedTodos$ = this.todos$.pipe(
  //   map(todos => todos.filter(todo => todo.completed))
  // )

  // visibleTodos$ = this.route.params.pipe(
  //   switchMap(params => {
  //     switch(params['status']) {
  //       case 'active':
  //         return this.activeTodos$;

  //       case 'completed':
  //         return this.completedTodos$;

  //       default:
  //         return this.todos$;
  //     }
  //   })
  // );

  constructor(
    private todosService: TodosService,
    private store: Store,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    console.log(this.todosCollection$.subscribe(todos => console.log(todos)))
    this.todosService
      .getTodos()
      .subscribe((todos) =>
        this.store.dispatch(TodosApiActions.retrievedTodoList({ todos }))
      );
  }

  // ngOnInit(): void {
  //   this.activeTodos$.subscribe(todos => console.log(todos))
  // }

  // addTodo(newTitle: string) {
  //   this.todosService.createTodo(newTitle)
  //     .subscribe();
  // }

  // renameTodo(todo: Todo, title: string) {
  //   this.todosService.updateTodo({...todo, title})
  //     .subscribe();
  // }

  // toggleTodo(todo: Todo) {
  //   this.todosService.updateTodo({...todo, completed: !todo.completed})
  //   .subscribe();
  // }

  // deleteTodo(todo: Todo) {
  //   this.todosService.deleteTodo(todo)
  //     .subscribe();
  // }
}
