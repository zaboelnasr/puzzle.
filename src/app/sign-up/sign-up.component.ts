import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignupComponent {
  username: string = '';
  password: string = '';
  confirmPassword: string = '';
  address: string = '';
  zipcode: string = '';
  registrationError: string = '';

  signup() {
    if (!this.isValidEmail(this.username)) {
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
}
