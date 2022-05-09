import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StartTimesPage } from './start-times.page';

const routes: Routes = [
  {
    path: '',
    component: StartTimesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StartTimesPageRoutingModule {}
