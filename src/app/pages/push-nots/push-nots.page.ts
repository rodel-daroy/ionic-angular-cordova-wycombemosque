import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {LoadingController, NavController, ToastController} from '@ionic/angular';

@Component({
    selector: 'app-push-nots',
    templateUrl: './push-nots.page.html',
    styleUrls: ['./push-nots.page.scss'],
})
export class PushNotsPage implements OnInit {

    today = new Date().toISOString();
    title: string;
    desc: string;
    url: string;
    schedule: string;

    constructor(public httpClient: HttpClient,
                public loadingController: LoadingController,
                public navController: NavController,
                public toastController: ToastController) {
    }

    ngOnInit() {
    }

    async sendForm() {
        const loader = await this.loadingController.create({message: 'Sending...', duration: 3000});

        await loader.present();

        const data: any = {
            app_id: '4e9b7545-8822-45d1-ba1e-2a34204efb90',
            included_segments: ['All'],
            headings: {en: this.title},
            contents: {en: this.desc},
            send_after: new Date(this.schedule).toLocaleString('en-GB', {
                timeZone: 'Europe/London'
            })
        };

        this.url !== undefined && this.url !== '' ? (data['url'] = this.url) : null;
        console.log('data', data);
        const headers = new HttpHeaders({
            'Content-Type': 'application/json; charset=utf-8',
            Authorization: 'Basic MTIwZTRjNTUtMzM3My00MjJhLWJkZjEtOGIyM2U4MTk4MGIz'
        });

        this.httpClient.post('https://onesignal.com/api/v1/notifications', data, {headers}).subscribe((response: any) => {
            loader.dismiss();
            if (response.recipients > 0) {
                this.showToast();
            }
        });
    }

    async showToast() {
        this.title = '';
        this.desc = '';
        this.url = '';
        this.schedule = '';

        const toast = await this.toastController.create({
            message: 'This message was successfully sent or scheduled',
            position: 'bottom',
            duration: 3000
        });

        return await toast.present();
    }

}
