import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [ ]
})

export class HeaderComponent implements OnInit {
  constructor(public router: Router,
              public http: Http) { }

  ngOnInit() {

  }

  logout() {
    localStorage.removeItem('id_token');
    this.router.navigate(['login']);
  }
}
