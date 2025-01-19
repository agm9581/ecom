import { Component, Input } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'login-block',
  templateUrl: './login-block.html',
  styleUrls: ['./login-block.scss'],
})
export class LoginBlockComponent {
  loggedIn: boolean;
  constructor(private authService: AuthService) {
    this.authService.loggedIn$.subscribe((status) => {
      this.loggedIn = status;
    });
  }

  mockLogin() {
    this.authService.login();
  }
  removeMockLogin() {
    this.authService.logout();
  }
}
