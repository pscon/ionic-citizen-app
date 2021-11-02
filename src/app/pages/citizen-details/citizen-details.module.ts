import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CitizenDetailsPageRoutingModule } from './citizen-details-routing.module';

import { CitizenDetailsPage } from './citizen-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CitizenDetailsPageRoutingModule
  ],
  declarations: [CitizenDetailsPage]
})
export class CitizenDetailsPageModule {}
