import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ColorearPage } from './colorear.page';

const routes: Routes = [
  {
    path: '',
    component: ColorearPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ColorearPageRoutingModule {}
