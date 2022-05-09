import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {JamaatTimesPageRoutingModule} from './jamaat-times-routing.module';

import {JamaatTimesPage} from './jamaat-times.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        JamaatTimesPageRoutingModule
    ],
    declarations: [JamaatTimesPage]
})
export class JamaatTimesPageModule {
}
