import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formular',
  imports: [ReactiveFormsModule],
  templateUrl: './formular.html',
  styleUrl: './formular.css',
})
export class Formular {
private fb = inject(FormBuilder);

  meinFormular: FormGroup = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    nachricht: ['']
  });

  onSubmit() {
    if (this.meinFormular.valid) {
      console.log('Formularwerte:', this.meinFormular.value);
    } else {
      console.log('Formular ist ungültig');
    }
  }
}
