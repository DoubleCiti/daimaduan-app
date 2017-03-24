import './rxjs-extensions';

import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CommonModule } from './common/common.module';
import { LayoutModule } from './layout/layout.module';
import { SidebarModule } from './sidebar/sidebar.module';
import { PastesModule } from './pastes/pastes.module';
import { TagsModule } from './tags/tags.module';
import { NotFoundComponent } from './not-found/not-found.component';

import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CommonModule,
    LayoutModule,
    SidebarModule,
    PastesModule,
    TagsModule,
    AppRoutingModule
  ],
  providers: [ Title ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
