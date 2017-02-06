import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { Paste } from '../../common/models';
import { PastesService } from '../../common/services/pastes.service';

@Component({
  selector: 'app-paste-view',
  templateUrl: './paste-view.component.html',
  styleUrls: ['./paste-view.component.css']
})

export class PasteViewComponent implements OnInit {
  paste: Paste;

  constructor(private titleService: Title,
              private route: ActivatedRoute,
              private pastesService: PastesService) {}

  ngOnInit(): void {
    this.titleService.setTitle('Pastes List');
    this.route.params
      .switchMap((params: Params) => this.pastesService.getPasteById(params['hashId']))
      .subscribe((paste: Paste) => this.paste = paste);
  }

}
