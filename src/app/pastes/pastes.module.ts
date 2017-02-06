import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { PasteListPageComponent } from './paste-list/paste-list-page.component';
import { PasteViewPageComponent } from './paste-view/paste-view-page.component';
import { PastesRoutingModule } from './pastes.routing';

@NgModule({
    imports: [
        BrowserModule,
        PastesRoutingModule
    ],
    declarations: [
        PasteListPageComponent,
        PasteViewPageComponent
    ]
})

export class PastesModule {}
