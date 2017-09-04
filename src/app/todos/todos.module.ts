import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodosRoutingModule } from './todos-routing.module';
import { ListComponent } from './list/list.component';
import { ListItemComponent } from './list-item/list-item.component';
import { TodosComponent } from './todos.component';

@NgModule({
  imports: [
    CommonModule,
    TodosRoutingModule
  ],
  declarations: [ListComponent, ListItemComponent, TodosComponent]
})
export class TodosModule { }
