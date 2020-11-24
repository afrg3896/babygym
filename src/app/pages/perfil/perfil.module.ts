import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilPageRoutingModule } from './perfil-routing.module';

import { PerfilPage } from './perfil.page';
import { FotoperfilPage } from '../fotoperfil/fotoperfil.page';
import { FotoperfilPageModule } from '../fotoperfil/fotoperfil.module';

@NgModule({
  entryComponents:[FotoperfilPage],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilPageRoutingModule,
    FotoperfilPageModule
  ],
  declarations: [PerfilPage]
})
export class PerfilPageModule {}
