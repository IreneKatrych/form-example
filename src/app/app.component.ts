import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'form-course-project';

  minDate: Date;
  maxDate: Date;

  exampleForm: FormGroup;
  constructor() {
    this.exampleForm = new FormGroup({
      userEmail: new FormControl('', [Validators.required, Validators.email]),
      firstName: new FormControl('', [
        Validators.required,
        Validators.pattern('[A-Z]{1}[a-z]{1,20}'),
      ]),
      lastName: new FormControl('', [
        Validators.required,
        Validators.pattern('[A-Z]{1}[a-z]{1,20}'),
      ]),
      phoneNumber: new FormControl('', [
        Validators.required,
        Validators.pattern('[0-9]{10}'),
      ]),
      dateOfBirth: new FormControl(new Date(), Validators.required),
      wish: new FormControl(),
    });
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear - 100, 0, 1);
    this.maxDate = new Date();
  }

  submit(): void {
    console.log(this.exampleForm);
  }
}
