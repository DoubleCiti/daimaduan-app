import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CustomMaterialModule } from '../custom-material.module';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
    imports: [
        BrowserModule,
        CustomMaterialModule.forRoot()
    ],
    declarations: [
        HeaderComponent,
        FooterComponent
    ],
    exports: [
        HeaderComponent,
        FooterComponent
    ]
})

export class LayoutModule {}
