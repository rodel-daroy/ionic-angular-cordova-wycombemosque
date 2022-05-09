import {Component, OnInit} from '@angular/core';
import {NavController, NavParams} from '@ionic/angular';

@Component({
    selector: 'app-about',
    templateUrl: './about.page.html',
    styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

    public tap = 0;

    constructor(public navController: NavController) {
    }

    ngOnInit() {
    }

    tapEvent() {
        this.tap++;
        if (this.tap === 5) {
            this.navController.navigateForward('TabsPage/pages/AdminLoginPage').then();
            this.tap = 0;
        }
    }

}
