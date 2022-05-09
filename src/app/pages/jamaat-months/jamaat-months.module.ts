import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {JamaatMonthsPageRoutingModule} from './jamaat-months-routing.module';

import {JamaatMonthsPage} from './jamaat-months.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        JamaatMonthsPageRoutingModule
    ],
    declarations: [JamaatMonthsPage]
})
export class JamaatMonthsPageModule {
}
