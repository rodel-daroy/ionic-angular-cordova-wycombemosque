import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {MonthsPageRoutingModule} from './months-routing.module';

import {MonthsPage} from './months.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        MonthsPageRoutingModule
    ],
    declarations: [MonthsPage]
})
export class MonthsPageModule {
}
