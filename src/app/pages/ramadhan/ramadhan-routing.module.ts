import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RamadhanPage } from './ramadhan.page';

const routes: Routes = [
  {
    path: '',
    component: RamadhanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RamadhanPageRoutingModule {}
