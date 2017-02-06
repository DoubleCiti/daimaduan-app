import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { Paste } from '../../common/models';
import { PastesService } from '../../common/services/pastes.service';

@Component({
  templateUrl: './paste-list.component.html',
  styleUrls: ['./paste-list.component.css']
})

export class PasteListComponent implements OnInit {
  pastes: Paste[] = [];

  constructor(private titleService: Title,
              private pastesService: PastesService) {}

  ngOnInit(): void {
    this.titleService.setTitle('Pastes List');
    this.pastesService.getAllPastes()
    .then(pastes => {
      this.pastes = pastes;
    });
  }
}
