import {Component, OnInit} from '@angular/core';
import {ModalController, NavParams} from '@ionic/angular';

@Component({
    selector: 'app-home-modal',
    templateUrl: './home-modal.component.html',
    styleUrls: ['./home-modal.component.scss'],
})
export class HomeModalComponent implements OnInit {

    title = '';
    time = '';

    constructor(private navParams: NavParams,
                public modalController: ModalController) {

        this.title = navParams.get('title');
        this.time = navParams.get('time');
    }

    ngOnInit() {
    }

}
