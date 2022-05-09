import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JamaatMonthsPage } from './jamaat-months.page';

const routes: Routes = [
  {
    path: '',
    component: JamaatMonthsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JamaatMonthsPageRoutingModule {}
