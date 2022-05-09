import {Component, OnInit} from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
    selector: 'app-admin-area',
    templateUrl: './admin-area.page.html',
    styleUrls: ['./admin-area.page.scss'],
})
export class AdminAreaPage implements OnInit {

    constructor(public navController: NavController) {
    }

    ngOnInit() {
    }

    openNotsPage() {
        this.navController.navigateForward('TabsPage/pages/PushNotsPage').then();
    }

    openAllSidesPage() {
        this.navController.navigateForward('TabsPage/pages/NewSlidePage').then();
    }

}
