import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JamaatTimesPage } from './jamaat-times.page';

const routes: Routes = [
  {
    path: '',
    component: JamaatTimesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JamaatTimesPageRoutingModule {}
