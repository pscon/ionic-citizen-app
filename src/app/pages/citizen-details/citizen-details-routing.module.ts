import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CitizenDetailsPage } from './citizen-details.page';

const routes: Routes = [
  {
    path: '',
    component: CitizenDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CitizenDetailsPageRoutingModule {}
