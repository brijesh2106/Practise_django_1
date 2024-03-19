import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  credentials = {
    username: '',
    password: ''
  };

  constructor(private authService: AuthService) {}

  login() {
    this.authService.login(this.credentials).subscribe(
      (response) => {
        console.log('Login successful:', response);
        // Handle success
      },
      (error) => {
        console.error('Login failed:', error);
        // Handle error
      }
    );
  }
}
