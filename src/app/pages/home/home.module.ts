import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {HomePageRoutingModule} from './home-routing.module';

import {HomePage} from './home.page';

import {HomeModalComponent} from '../../components/home-modal/home-modal.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        HomePageRoutingModule
    ],
    declarations: [HomePage, HomeModalComponent]
})
export class HomePageModule {
}
