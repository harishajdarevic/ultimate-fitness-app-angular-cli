import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import * as path from 'path';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'auth/login'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
