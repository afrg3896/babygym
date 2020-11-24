import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ImagenesPageRoutingModule } from './imagenes-routing.module';

import { ImagenesPage } from './imagenes.page';
import { AgregarImagePage } from '../agregar-image/agregar-image.page';
import { AgregarImagePageModule } from '../agregar-image/agregar-image.module';

@NgModule({
  entryComponents: [AgregarImagePage],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgregarImagePageModule,
    ImagenesPageRoutingModule
  ],
  declarations: [ImagenesPage]
})
export class ImagenesPageModule {}
