import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LisVehiculosPage } from './lis-vehiculos.page';

const routes: Routes = [
  {
    path: '',
    component: LisVehiculosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LisVehiculosPageRoutingModule {}
