import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';

import { contentHeaders } from '../common/headers';

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
      this.http.post('http://localhost:8000/api/v1/users/login', body, { headers: contentHeaders })
        .subscribe(
          response => {
            localStorage.setItem('id_token', response.json().id_token);
            console.log(localStorage.getItem('id_token'));
            this.router.navigateByUrl('/');
          },
          error => {
            console.log(error.text());
          }
        );
    }

    signup(event) {
      event.preventDefault();
      this.router.navigate(['signup']);
    }

}
