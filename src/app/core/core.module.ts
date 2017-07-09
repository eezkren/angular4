import {AppRoutingModule} from '../app-routing.module';
import {AuthGuardService} from '../auth/auth-guard.service';
import {AuthService} from '../auth/auth.service';
import {RecipeService} from '../recipes/service/recipe.service';
import {DataStorageService} from '../shared/data-storage.service';
import {SharedModule} from '../shared/shared.module';
import {ShoppingListService} from '../shopping-list/service/shopping-list.service';
import {HeaderComponent} from './header/header.component';
import {HomeComponent} from './home/home.component';
import {NgModule} from '@angular/core';

@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    SharedModule,
    AppRoutingModule
  ],
  exports: [
    AppRoutingModule,
    HeaderComponent
  ],
  providers: [ShoppingListService, RecipeService, DataStorageService, AuthService, AuthGuardService],
  bootstrap: []
})
export class CoreModule {

}
