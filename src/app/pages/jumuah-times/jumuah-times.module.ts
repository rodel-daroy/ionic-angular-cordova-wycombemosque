import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {JumuahTimesPageRoutingModule} from './jumuah-times-routing.module';

import {JumuahTimesPage} from './jumuah-times.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        JumuahTimesPageRoutingModule
    ],
    declarations: [JumuahTimesPage]
})
export class JumuahTimesPageModule {
}
