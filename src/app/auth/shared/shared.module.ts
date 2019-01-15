import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthSharedComponent } from './containers/auth-shared.component';

@NgModule({
  declarations: [AuthSharedComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
      AuthSharedComponent
  ],
})
export class SharedModule {
}
