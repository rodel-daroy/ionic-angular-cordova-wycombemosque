import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LoadingController, NavController, ToastController} from '@ionic/angular';
import {EmailComposer} from '@ionic-native/email-composer/ngx';

@Component({
    selector: 'app-enquiry',
    templateUrl: './enquiry.page.html',
    styleUrls: ['./enquiry.page.scss'],
})
export class EnquiryPage implements OnInit {

    name: string;
    email: string;
    message: string;

    constructor(public httpClient: HttpClient,
                public loadingController: LoadingController,
                public navController: NavController,
                public toastController: ToastController,
                private emailComposer: EmailComposer) {
    }

    ngOnInit() {
    }

    async sendForm() {

        const loader = await this.loadingController.create({message: 'Sending...'});

        await loader.present();

        this.httpClient.post('http://akrdesigns.co.uk/mosque-app-mailer-LATEST.php', {
            name: this.name,
            email: this.email,
            message: this.message
        }).subscribe(response => {
            loader.dismiss();
            this.showToast();
        });
    }

    async showToast() {

        this.name = '';
        this.email = '';
        this.message = '';

        const toast = await this.toastController.create({
            message: 'This message was successfully sent',
            position: 'bottom',
            duration: 3000
        });

        return await toast.present();
    }

}
