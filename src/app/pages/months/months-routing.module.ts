import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MonthsPage } from './months.page';

const routes: Routes = [
  {
    path: '',
    component: MonthsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MonthsPageRoutingModule {}
