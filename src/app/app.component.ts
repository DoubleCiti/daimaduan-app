import { Component, OnInit } from '@angular/core';
import { slideInDownAnimation } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [slideInDownAnimation],
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  ngOnInit() {

  }
}
