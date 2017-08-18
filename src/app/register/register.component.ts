import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { FormControl, Validators } from '@angular/forms';

import { contentHeaders } from '../common/headers';
import { environment } from '../../environments/environment';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {

  constructor(public router: Router,
              public http: Http) { }

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(EMAIL_REGEX)]);

  usernameFormControl = new FormControl('', [
    Validators.required]);

  passwordFormControl = new FormControl('', [
    Validators.required]);

  register(event, email, username, password) {
    event.preventDefault();

    const body = JSON.stringify({ email, username, password });
    this.http.post(environment.api_url + '/user/register', body, { headers: contentHeaders })
      .subscribe(
        response => { this.router.navigate(['/login']); },
        error => {
          console.log(error.text());
        }
      );
  }
}
