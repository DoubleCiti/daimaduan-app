import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HotTagsComponent } from './hot-tags/hot-tags.component';

@NgModule({
    imports: [
        BrowserModule
    ],
    providers: [
        HotTagsComponent
    ],
    exports: [
        HotTagsComponent
    ]
})

export class SidebarModule {}
