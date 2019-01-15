import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../../environments/environment';
import { AuthService } from '../services/auth/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';

export const ROUTES: Routes = [
    {
      path: 'auth',
      children: [
          { path: '', pathMatch: 'full', redirectTo: 'login'},
          { path: 'login', loadChildren: './login/login.module#LoginModule'},
          { path: 'register', loadChildren: './register/register.module#RegisterModule'},
      ]
    }
];

const config = {
    apiKey: "AIzaSyAiHQWTzPB0ChxAo9V9oG0HpTTgtCYjrS0",
    authDomain: "fitness-app-3c39e.firebaseapp.com",
    databaseURL: "https://fitness-app-3c39e.firebaseio.com",
    projectId: "fitness-app-3c39e",
    storageBucket: "fitness-app-3c39e.appspot.com",
    messagingSenderId: "752098988462"
};

@NgModule({
  imports: [
      CommonModule,
      RouterModule.forChild(ROUTES),
      AngularFireModule.initializeApp(config)
  ],
  providers: [
      AuthService,
      AngularFireAuth
  ]
})
export class AuthModule { }
