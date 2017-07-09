import {ShoppingEditComponent} from './shopping-edit/shopping-edit.component';
import {ShoppingListComponent} from './shopping-list.component';
import {ShoppingListRoutingModule} from './shopping-list.routing';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    ShoppingListComponent,
    ShoppingEditComponent
  ],
  exports: [
  ],
  imports: [
    CommonModule,
    FormsModule,
    ShoppingListRoutingModule
  ],
  providers: [],
  bootstrap: []
})
export class ShoppingListModule {

}
