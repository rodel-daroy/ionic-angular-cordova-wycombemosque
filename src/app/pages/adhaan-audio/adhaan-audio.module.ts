import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {AdhaanAudioPageRoutingModule} from './adhaan-audio-routing.module';

import {AdhaanAudioPage} from './adhaan-audio.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        AdhaanAudioPageRoutingModule
    ],
    declarations: [AdhaanAudioPage]
})
export class AdhaanAudioPageModule {
}
