import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';

import { contentHeaders } from '../common/headers';

import { environment } from '../../environments/environment';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {

  constructor(public router: Router,
              public http: Http) { }

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
