import {HomeComponent} from './home/home.component';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {NgModule} from '@angular/core'
import {Routes, RouterModule} from '@angular/router';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  //  {path: 'recipes', redirectTo: '/recipes', pathMatch: 'full'},
  {path: 'recipes', loadChildren: './recipes/recipes.module#RecipesModule'},
  {path: 'shopping-list', component: ShoppingListComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

