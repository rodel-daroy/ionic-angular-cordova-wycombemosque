import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {MosqueRadioPageRoutingModule} from './mosque-radio-routing.module';

import {MosqueRadioPage} from './mosque-radio.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        MosqueRadioPageRoutingModule
    ],
    declarations: [MosqueRadioPage]
})
export class MosqueRadioPageModule {
}
