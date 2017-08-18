import { NgModule, ModuleWithProviders } from '@angular/core';

import { MdIconModule } from '@angular/material';
import { MdMenuModule } from '@angular/material';
import { MdToolbarModule } from '@angular/material';
import { MdInputModule } from '@angular/material';
import { MdButtonModule } from '@angular/material';
import { MdCardModule } from '@angular/material';

const MATERIAL_MODULES = [
  MdIconModule,
  MdMenuModule,
  MdToolbarModule,
  MdInputModule,
  MdButtonModule,
  MdCardModule
]

@NgModule({
  imports: MATERIAL_MODULES,
  exports: MATERIAL_MODULES
})

export class CustomMaterialModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CustomMaterialModule
    };
  }
}
