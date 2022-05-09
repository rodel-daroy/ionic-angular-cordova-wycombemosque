import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JumuahTimesPage } from './jumuah-times.page';

const routes: Routes = [
  {
    path: '',
    component: JumuahTimesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JumuahTimesPageRoutingModule {}
