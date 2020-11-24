import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ColorearPageRoutingModule } from './colorear-routing.module';

import { ColorearPage } from './colorear.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ColorearPageRoutingModule
  ],
  declarations: [ColorearPage]
})
export class ColorearPageModule {}
