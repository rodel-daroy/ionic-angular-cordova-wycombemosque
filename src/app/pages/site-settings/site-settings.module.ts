import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {SiteSettingsPageRoutingModule} from './site-settings-routing.module';

import {SiteSettingsPage} from './site-settings.page';

import {IonicSelectableModule} from 'ionic-selectable';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        SiteSettingsPageRoutingModule,
        IonicSelectableModule
    ],
    declarations: [SiteSettingsPage]
})
export class SiteSettingsPageModule {
}
