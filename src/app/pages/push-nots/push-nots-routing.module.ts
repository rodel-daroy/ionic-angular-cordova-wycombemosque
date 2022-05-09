import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PushNotsPage } from './push-nots.page';

const routes: Routes = [
  {
    path: '',
    component: PushNotsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PushNotsPageRoutingModule {}
