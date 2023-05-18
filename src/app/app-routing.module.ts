import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './sign-up/sign-up.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'login', component : LoginComponent},
  {path: 'signup', component : SignupComponent}

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
