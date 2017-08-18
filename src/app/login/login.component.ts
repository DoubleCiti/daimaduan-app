import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';

import { contentHeaders } from '../common/headers';

import { environment } from '../../environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  constructor(public router: Router,
              public http: Http) { }

  login(event, email, password) {
    event.preventDefault();

    const body = JSON.stringify({ email, password });
    this.http.post(environment.api_url + '/user/login', body, { headers: contentHeaders })
      .subscribe(
        response => {
          localStorage.setItem('id', response.json().id);
          console.log(localStorage.getItem('id'));
          this.router.navigateByUrl('/');
        },
        error => {
          console.log(error.text());
        }
      );
  }

  register(event) {
    event.preventDefault();

    this.router.navigate(['/register']);
  }

}
