import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TodoComponent } from './components/todo/todo.component';

const routes: Routes = [
  {
    path: 'todos', component: AppComponent
  }
  ,{
    path: 'todos/:status', component: TodoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
