import { Component, Input } from '@angular/core';

import { Paste } from '../../models';

@Component({
  selector: 'common-paste-view',
  templateUrl: './paste-view.component.html',
  styleUrls: ['./paste-view.component.css']
})

export class PasteViewComponent {
  @Input()
  paste;
}
