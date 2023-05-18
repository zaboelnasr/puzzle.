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
    console.log('Email: ' + this.email);
    console.log('Password: ' + this.password);
    console.log('Confirm Password: ' + this.confirmPassword);
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
  private isValidEmail(email: string): boolean {
    // Implementiere hier die Logik zur Überprüfung der E-Mail-Adresse
    // Du kannst eine reguläre Ausdruck oder eine andere Methode verwenden
    // In diesem Beispiel wird eine einfache Überprüfung auf das Vorhandensein eines @-Symbols durchgeführt
    return email.includes('@');
  }
  
}
