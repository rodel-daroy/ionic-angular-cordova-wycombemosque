import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {StartTimesPageRoutingModule} from './start-times-routing.module';

import {StartTimesPage} from './start-times.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        StartTimesPageRoutingModule
    ],
    declarations: [StartTimesPage]
})
export class StartTimesPageModule {
}
