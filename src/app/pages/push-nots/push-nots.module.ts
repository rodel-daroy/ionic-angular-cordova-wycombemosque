import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {PushNotsPageRoutingModule} from './push-nots-routing.module';

import {PushNotsPage} from './push-nots.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        PushNotsPageRoutingModule
    ],
    declarations: [PushNotsPage]
})
export class PushNotsPageModule {
}
