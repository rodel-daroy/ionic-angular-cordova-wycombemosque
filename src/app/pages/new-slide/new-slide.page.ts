import {Component, OnInit} from '@angular/core';
import {LoadingController, NavController, ToastController} from '@ionic/angular';

import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';

@Component({
    selector: 'app-new-slide',
    templateUrl: './new-slide.page.html',
    styleUrls: ['./new-slide.page.scss'],
})
export class NewSlidePage implements OnInit {

    today = new Date().toISOString();
    image: string;
    url = '';
    title = '';
    slides: any = [];
    slideLength: any;

    constructor(public loadingCtrl: LoadingController,
                public navCtrl: NavController,
                public toast: ToastController,
                public angularFireDatabase: AngularFireDatabase) {

        this.angularFireDatabase.list('/sliders/slides').valueChanges().subscribe((data: any) => {
            console.log('data =====>', data);
            this.slides = data;
            this.slideLength = data.length;
        });
    }

    ngOnInit() {
    }

    updateSlide(slide, type) {
        const itemRef = this.angularFireDatabase.list('sliders/slides');
        if (type === 'disable') {
            itemRef.update(slide.$key, {
                disabled: true
            });
        } else {
            itemRef.update(slide.$key, {
                disabled: false
            });
        }
    }

    deleteSlide(slide) {
        const itemRef = this.angularFireDatabase.list('sliders/slides');
        itemRef.remove(slide.$key);
    }

    addSlide() {
        const itemRef = this.angularFireDatabase.list('sliders/slides');
        itemRef
            .push({
                image: this.image,
                url: this.url,
                linkButtonText: this.title,
                showImage: true,
                disabled: false,
                showUrl: !!(this.title && this.url)
            })
            .then(res => {
                this.showToast().then();
            });
    }

    async showToast() {
        const toast = await this.toast.create({
            message: 'New slide has been added.',
            position: 'bottom',
            duration: 3500
        });
        this.image = '';
        this.url = '';
        this.title = '';

        return await toast.present();
    }

}
