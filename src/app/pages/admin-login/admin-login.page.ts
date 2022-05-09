import {Component, OnInit} from '@angular/core';
import {NavController, ToastController} from '@ionic/angular';

import {AngularFireDatabase} from 'angularfire2/database';

@Component({
    selector: 'app-admin-login',
    templateUrl: './admin-login.page.html',
    styleUrls: ['./admin-login.page.scss'],
})
export class AdminLoginPage implements OnInit {

    pin: string;

    constructor(public navController: NavController,
                public toastController: ToastController,
                private angularFireDatabase: AngularFireDatabase) {
    }

    ngOnInit() {
    }

    login() {
        this.angularFireDatabase.list('admin/').valueChanges().subscribe((status: any) => {
            console.log('status =====>', status);
            if (status[0] === Number(this.pin)) {
                this.navController.navigateForward('TabsPage/pages/AdminAreaPage').then();
            } else {
                this.showToast().then();

            }
        });
    }

    async showToast() {
        const toast = await this.toastController.create({
            message: 'Invalid password, try again',
            duration: 3000,
            position: 'bottom'
        });

        return await toast.present();
    }

}
