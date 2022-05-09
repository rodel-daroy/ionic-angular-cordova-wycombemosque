import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MosqueRadioPage } from './mosque-radio.page';

const routes: Routes = [
  {
    path: '',
    component: MosqueRadioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MosqueRadioPageRoutingModule {}
