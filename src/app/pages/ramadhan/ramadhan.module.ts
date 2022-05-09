import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {RamadhanPageRoutingModule} from './ramadhan-routing.module';

import {RamadhanPage} from './ramadhan.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RamadhanPageRoutingModule
    ],
    declarations: [RamadhanPage]
})
export class RamadhanPageModule {
}
