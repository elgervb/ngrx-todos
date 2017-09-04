import { TodosService } from './todos.service';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodosRoutingModule } from './todos-routing.module';
import { ListComponent } from './list/list.component';
import { ListItemComponent } from './list-item/list-item.component';
import { TodosComponent } from './todos.component';
import { ItemFormComponent } from './item-form/item-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TodosRoutingModule
  ],
  declarations: [ListComponent, ListItemComponent, TodosComponent, ItemFormComponent],
  providers: [
    TodosService
  ]
})
export class TodosModule { }
