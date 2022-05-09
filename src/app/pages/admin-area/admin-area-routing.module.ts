import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminAreaPage } from './admin-area.page';

const routes: Routes = [
  {
    path: '',
    component: AdminAreaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminAreaPageRoutingModule {}
