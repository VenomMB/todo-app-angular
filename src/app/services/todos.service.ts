import { Injectable } from '@angular/core';
import { Todo } from '../types/todo';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject, map, switchMap, tap } from 'rxjs';


const API = 'https://mate.academy/students-api'
const USER_ID = 10268;

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor(private http: HttpClient) {}

  getTodos() {
    return this.http.get<Todo[]>(`${API}/todos?userId=${USER_ID}`);
  }

  addTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(`${API}/todos`, todo);
  }

  deleteTodo(todoId: number): Observable<any> {
    return this.http.delete(`${API}/todos/${todoId}`);
  }

  // getTodos(): Observable<Array<Todo>> {
  //   return this.http
  //     .get<{ items: Todo[] }>(
  //       `${API}/todos?userId=${USER_ID}`
  //     )
  //     .pipe(map((todos) => todos.items || []));
  // }


  // refresh$$ = new BehaviorSubject(null);
  // todos$: Observable<Todo[]>;

  // constructor(private http: HttpClient) {
  //   this.todos$ = this.refresh$$.pipe(
  //     switchMap(() => this.getTodos())
  //   )
  // }

  // createTodo(title: string) {
  //   return this.http.post<Todo>(`${API}/todos`, {
  //     title,
  //     userId: USER_ID,
  //     completed: false,
  //   })
  //     .pipe(
  //       tap((x) => this.refresh$$.next(null))
  //     )
  // }

  // updateTodo(todo: Todo) {
  //   return this.http.patch<Todo>(`${API}/todos/${todo.id}`, todo)
  //     .pipe(
  //       tap((x) => this.refresh$$.next(null))
  //     )
  // }

  // deleteTodo(todo: Todo) {
  //   return this.http.delete<Todo>(`${API}/todos/${todo.id}`)
  //     .pipe(
  //       tap((x) => this.refresh$$.next(null))
  //     )
  // }
}
