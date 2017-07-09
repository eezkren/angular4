import {SigninComponent} from './signin/signin.component';
import {SignupComponent} from './signup/signup.component';
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const authRoutes: Routes = [
  {path: 'signup', component: SignupComponent},
  {path: 'signin', component: SigninComponent}
]

@NgModule({
  declarations: [
  ],
  imports: [
    RouterModule.forChild(authRoutes)
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: []
})
export class AuthRoutingModule {

}
