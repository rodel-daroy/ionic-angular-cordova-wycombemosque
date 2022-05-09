import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {NewSlidePageRoutingModule} from './new-slide-routing.module';

import {NewSlidePage} from './new-slide.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        NewSlidePageRoutingModule
    ],
    declarations: [NewSlidePage]
})
export class NewSlidePageModule {
}
