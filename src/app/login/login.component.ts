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
  loginError = '';

  onSubmit() {
    if (this.email === 'test@test.at' && this.password === '12345678') {
      console.log('Login successful.');
    } else {
    console.log('Login failed.'); 
    console.log('Email: ' + this.email);
    console.log('Password: ' + this.password);
    console.log('Confirm Password: ' + this.confirmPassword);
  }
}

  login() {
    // Überprüfung des Benutzernamens
    if (!this.isValidEmail(this.email)) {
      this.loginError = 'Invalid email address';
      return;
    }

    // Überprüfung des Passworts
    if (this.password !== '12345678') {
      this.loginError = 'Invalid password';
      return;
    }

    // Erfolgreicher Login
    this.loginError = ''; // Zurücksetzen der Fehlermeldung
    console.log('Login successful');
  }

  // Hilfsmethode zur Überprüfung der E-Mail-Adresse
  isValidEmail(email: string): boolean {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }
  
}
