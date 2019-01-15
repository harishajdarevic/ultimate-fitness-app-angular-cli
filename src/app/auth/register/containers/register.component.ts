import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AuthService } from '../../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  template: `
      <div>
          <app-auth-shared (submitted)="registerUser($event)">
              <h1>Register</h1>
              <a routerLink="/auth/login">Already registered?</a>
              <button type="submit">
                  Register
              </button>
              <div class="error" *ngIf="error">
                  {{ error }}
              </div>
          </app-auth-shared>
      </div>
  `,
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  error: string;

  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
  }

  async registerUser(event: FormGroup) {
      const { email, password } = event.value;
      try {
          await this.authService.createUser(email, password);
          this.router.navigate(['/']);
      } catch (err) {
          this.error = err.message;
      }
  }
}
