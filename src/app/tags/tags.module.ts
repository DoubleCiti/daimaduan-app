import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { TagListComponent } from './tag-list';
import { TagViewComponent } from './tag-view';
import { TagsRoutingModule } from './tags.routing';

@NgModule({
    imports: [
        BrowserModule,
        TagsRoutingModule
    ],
    declarations: [
        TagListComponent,
        TagViewComponent
    ]
})

export class TagsModule {}
