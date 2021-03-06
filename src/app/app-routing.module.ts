import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodosModule } from './todos/todos.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: 'app/todos/todos.module#TodosModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
