import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private _Router: Router) {

  }
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  passwordFormControl = new FormControl('', [Validators.required]);
  hide = true;

  login() {
    if (this.emailFormControl.valid) {
      localStorage.setItem('upcare-token', '123')
      this._Router.navigate(['/dashboard'])
    }
  }
}
