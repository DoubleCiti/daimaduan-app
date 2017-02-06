import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { PasteListComponent } from './paste-list';
import { PasteViewComponent } from './paste-view';
import { PastesRoutingModule } from './pastes.routing';

@NgModule({
    imports: [
        BrowserModule,
        PastesRoutingModule
    ],
    declarations: [
        PasteListComponent,
        PasteViewComponent
    ]
})

export class PastesModule {}
