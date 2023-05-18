import { Component } from '@angular/core';
import { Routes } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignupComponent {
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  address: string = '';
  zipcode: string = '';
  company: string = '';
  registrationError: string = '';

  onSubmit() {
    if (this.email === 'test@test.at' && this.password === '12345678') {
      console.log('Sign Up successful.');
    } else {
      console.log('Sign Up failed.');
    }
  }

  signup() {
    if (!this.isValidEmail(this.email)) {
      this.registrationError = 'Invalid email address';
      return;
    }

    if (this.password !== this.confirmPassword) {
      this.registrationError = 'Passwords do not match';
      return;
    }

    if (this.password.length < 8) {
      this.registrationError = 'Password must be at least 8 characters long';
      return;
    }

    this.registrationError = '';
    console.log('Registration successful');
  }

  private isValidEmail(email: string): boolean {
    return email.includes('@');
  }
  routes: Routes = [
    // Other routes...
    { path: 'signup', component: SignupComponent },
  ];
  
}
