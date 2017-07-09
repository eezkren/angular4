import {AuthGuardService} from '../auth/auth-guard.service';
import {ShoppingListComponent} from './shopping-list.component';
import {NgModule} from '@angular/core'
import {Routes, RouterModule} from '@angular/router';

const shoppingListRoutes: Routes = [
  {
    path: '', component: ShoppingListComponent
  },
];

@NgModule({
  declarations: [

  ],
  imports: [
    RouterModule.forChild(shoppingListRoutes)
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: []
})
export class ShoppingListRoutingModule {

}

