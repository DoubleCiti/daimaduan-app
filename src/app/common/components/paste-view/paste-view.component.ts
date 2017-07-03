import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-common-paste-view',
  templateUrl: './paste-view.component.html',
  styleUrls: ['./paste-view.component.css']
})

export class PasteViewComponent {
  @Input()
  paste;
}
