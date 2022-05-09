import {Component, OnInit} from '@angular/core';
import {NavController} from '@ionic/angular';

import {AngularFireDatabase} from 'angularfire2/database';

@Component({
    selector: 'app-ramadhan',
    templateUrl: './ramadhan.page.html',
    styleUrls: ['./ramadhan.page.scss'],
})
export class RamadhanPage implements OnInit {

    ramadhanDays = [];
    ramadhanData = null;
    ramadhanYear = null;

    constructor(public navCtrl: NavController,
                private afs: AngularFireDatabase) {

        this.afs.list('ramadhan/days').query.once('value', data => {
            this.ramadhanDays = data.val();
        });

        this.afs.list('ramadhan').query.once('value', data => {
            this.ramadhanData = data.val();
            this.ramadhanYear = this.ramadhanData.year;
        });
    }

    ngOnInit() {
    }

}
