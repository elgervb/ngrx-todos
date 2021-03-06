import { ActionWithPayload, TodoItem, TodoState } from './todos.models';
import { TodosService } from './todos.service';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule, ActionReducerMap, ActionReducer, Action } from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage';

import { SharedModule } from '../shared/shared.module';
import { TodosRoutingModule } from './todos-routing.module';
import { ListComponent } from './list/list.component';
import { ListItemComponent } from './list-item/list-item.component';
import { TodosComponent } from './todos.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { ItemFormComponent } from './item-form/item-form.component';
import { todosReducer } from './todos.reducers';

const reducers: ActionReducerMap<TodoState> = {todos: todosReducer};

export function localStorageSyncReducer(reducer): ActionReducer<TodoState, ActionWithPayload<TodoItem>> {
  return localStorageSync({
    keys: ['todos'],
    rehydrate: true
  })(reducer);
}
const metaReducers = [localStorageSyncReducer];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    StoreModule.forRoot(reducers, {metaReducers}),
    TodosRoutingModule
  ],
  declarations: [ListComponent, ListItemComponent, TodosComponent, ItemFormComponent, ItemDetailsComponent],
  providers: [
    TodosService
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class TodosModule { }
