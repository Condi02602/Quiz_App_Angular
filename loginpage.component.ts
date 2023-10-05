import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginComponent {
  public isAuthenticationFail!: boolean;
  constructor(private router: Router) {
    this.isAuthenticationFail = false;
  }
  loginForm = new FormGroup({
    UserName: new FormControl('Sample', [
      Validators.required,
      Validators.minLength(5),
    ]),
    Password: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
  });

  CheckUser() {
    let uname = this.loginForm.value.UserName;
    let upass = this.loginForm.value.Password;
    if (uname == "admin" && upass == "admin")
      this.router.navigate(['timer']);
    else
      this.isAuthenticationFail = true;
  }
}
