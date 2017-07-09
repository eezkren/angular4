import {ShoppingEditComponent} from './shopping-edit/shopping-edit.component';
import {ShoppingListComponent} from './shopping-list.component';
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
    FormsModule
  ],
  providers: [],
  bootstrap: []
})
export class ShoppingListModule {

}
