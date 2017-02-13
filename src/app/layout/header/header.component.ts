import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { AuthHttp, JwtHelper } from 'angular2-jwt';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [ JwtHelper ]
})

export class HeaderComponent implements OnInit {
  jwt: string;
  decodedJwt: string;
  response: string;
  api: string;

  constructor(public router: Router,
              public http: Http,
              public authHttp: AuthHttp,
              public jwtHelper: JwtHelper) { }

  ngOnInit() {

  }

  logout() {
    localStorage.removeItem('id_token');
    this.router.navigate(['login']);
  }
}
