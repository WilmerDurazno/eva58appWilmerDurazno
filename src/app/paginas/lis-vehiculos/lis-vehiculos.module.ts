import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LisVehiculosPageRoutingModule } from './lis-vehiculos-routing.module';

import { LisVehiculosPage } from './lis-vehiculos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LisVehiculosPageRoutingModule
  ],
  declarations: [LisVehiculosPage]
})
export class LisVehiculosPageModule {}
