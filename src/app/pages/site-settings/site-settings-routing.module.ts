import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SiteSettingsPage } from './site-settings.page';

const routes: Routes = [
  {
    path: '',
    component: SiteSettingsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SiteSettingsPageRoutingModule {}
