import {Component, OnInit} from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
    selector: 'app-contact-us',
    templateUrl: './contact-us.page.html',
    styleUrls: ['./contact-us.page.scss'],
})
export class ContactUsPage implements OnInit {

    constructor(public navController: NavController) {
    }

    ngOnInit() {
    }

    openEnquiryPage() {
        this.navController.navigateForward('EnquiryPage').then();
    }

}
