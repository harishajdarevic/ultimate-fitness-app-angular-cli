import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth-shared',
  templateUrl: './auth-shared.component.html',
  styleUrls: ['./auth-shared.component.scss']
})
export class AuthSharedComponent {

  @Output() submitted = new EventEmitter<FormGroup>();

  form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
  });

  constructor(private fb: FormBuilder) { }

  onSubmit() {
    if (this.form.valid) {
      this.submitted.emit(this.form);
    }
  }

    get passwordInvalid() {
        const control = this.form.get('password');
        return control.hasError('required') && control.touched;
    }

    get emailFormat() {
        const control = this.form.get('email');
        return control.hasError('email') && control.touched;
    }


}
