import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewSlidePage } from './new-slide.page';

const routes: Routes = [
  {
    path: '',
    component: NewSlidePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewSlidePageRoutingModule {}
