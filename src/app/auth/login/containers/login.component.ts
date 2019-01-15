import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth/auth.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  template: `
      <div>
          <app-auth-shared (submitted)="loginUser($event)">
              <h1>Login</h1>
              <a routerLink="/auth/register">Not registered?</a>
              <button type="submit">
                  Login
              </button>
              <div class="error" *ngIf="error">
                  {{ error }}
              </div>
          </app-auth-shared>
      </div>
  `,
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  error: string;

  constructor(private authService: AuthService) { }

  loginUser(event: FormGroup) {
    try {
      const { email, password } = event.value;
      this.authService.loginUser(email, password);
    } catch (err) {
      this.error = err;
    }
  }

}
