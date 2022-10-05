import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required, Validators.min(5)]);
  formGroup = this._formBuilder.group({
    username: this.username,
    password: this.password
  })

  constructor(
    private _formBuilder: FormBuilder,
    private router: Router 
    ) { }

  ngOnInit(): void {
  }

  getUsernameErrorMessage() {
    if (this.username.hasError('required')) {
      return 'You must enter a value';
    }

    return this.username.hasError('email') ? 'Not a valid email' : '';
  }

  getPasswordErrorMessage() {
    if (this.username.hasError('required')) {
      return 'You must enter a value';
    }

    return this.username.hasError('min') ? 'Minimum length 5.' : '';
  }

  onSubmit() {
    if(this.formGroup.invalid) return;

    this.router.navigate(['main'])

  }

}
