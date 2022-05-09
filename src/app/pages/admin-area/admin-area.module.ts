import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {AdminAreaPageRoutingModule} from './admin-area-routing.module';

import {AdminAreaPage} from './admin-area.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        AdminAreaPageRoutingModule
    ],
    declarations: [AdminAreaPage]
})
export class AdminAreaPageModule {
}
