import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AuthGuardService} from './auth/auth-guard.service';
import {AuthModule} from './auth/auth.module';
import {AuthService} from './auth/auth.service';
import {HeaderComponent} from './header/header.component';
import {ShoppingListService} from './shopping-list/service/shopping-list.service';
import {RecipeService} from './recipes/service/recipe.service';
import {DataStorageService} from './shared/data-storage.service';
import {HttpModule} from '@angular/http';
import {SharedModule} from './shared/shared.module';
import {ShoppingListModule} from './shopping-list/shopping-list.module';
import {HomeComponent} from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    SharedModule,
    ShoppingListModule,
    AuthModule
  ],
  providers: [ShoppingListService, RecipeService, DataStorageService, AuthService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule {}
