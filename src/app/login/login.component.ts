import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
})

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  email= '';
  password='';
  confirmPassword= '';

  onSubmit() {
    console.log('Email: ' + this.email);
    console.log('Password: ' + this.password);
    console.log('Confirm Password: ' + this.confirmPassword);
  }
}
