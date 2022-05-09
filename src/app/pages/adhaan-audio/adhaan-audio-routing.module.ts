import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdhaanAudioPage } from './adhaan-audio.page';

const routes: Routes = [
  {
    path: '',
    component: AdhaanAudioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdhaanAudioPageRoutingModule {}
