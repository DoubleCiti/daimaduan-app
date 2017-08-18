import './rxjs-extensions';

import { BrowserModule, Title } from '@angular/platform-browser';
import { CustomMaterialModule } from './custom-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MD_PLACEHOLDER_GLOBAL_OPTIONS } from '@angular/material';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
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
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    CustomMaterialModule.forRoot(),
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    CommonModule,
    LayoutModule,
    SidebarModule,
    PastesModule,
    TagsModule,
    AppRoutingModule
  ],
  providers: [
    Title,
    { provide: MD_PLACEHOLDER_GLOBAL_OPTIONS, useValue: { float: 'always' } }
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
