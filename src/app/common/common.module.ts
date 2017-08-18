import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CustomMaterialModule } from '../custom-material.module';

import { PastesService } from './services/pastes.service';
import { TagsService } from './services/tags.service';

import { PasteViewComponent } from './components/paste-view/paste-view.component';

@NgModule({
  imports: [
    BrowserModule,
    CustomMaterialModule.forRoot()
  ],
  providers: [
    PastesService,
    TagsService,
    PasteViewComponent
  ]
})

export class CommonModule {}
