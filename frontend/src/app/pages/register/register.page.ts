import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  userData = {
    username: '',
    password: '',
    email: ''
  };

  constructor(private authService: AuthService) {}

  register() {
    this.authService.register(this.userData).subscribe(
      (response) => {
        console.log('Registration successful:', response);
        // Handle success
      },
      (error) => {
        console.error('Registration failed:', error);
        // Handle error
      }
    );
  }
}
