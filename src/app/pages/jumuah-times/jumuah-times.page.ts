import {Component, OnInit} from '@angular/core';
import {NavController} from '@ionic/angular';

import {AngularFireDatabase} from 'angularfire2/database';

@Component({
    selector: 'app-jumuah-times',
    templateUrl: './jumuah-times.page.html',
    styleUrls: ['./jumuah-times.page.scss'],
})
export class JumuahTimesPage implements OnInit {

    jumuahTimesJR1 = null;
    jumuahTimesJR2 = null;

    jumuahTimesCF1 = null;
    jumuahTimesCF2 = null;

    jumuahTimesTF1 = null;
    jumuahTimesTF2 = null;

    jumuahTimesMF1 = null;
    jumuahTimesMF2 = null;

    constructor(public navController: NavController,
                private angularFireDatabase: AngularFireDatabase) {

        this.angularFireDatabase.list('jumuahs').query.once('value', data => {
            const jumuahTimes = data.val().filter(data1 => data1);
            this.jumuahTimesJR1 = jumuahTimes[0].jubilee.firstJamaat;
            this.jumuahTimesJR2 = jumuahTimes[0].jubilee.secondJamaat;

            this.jumuahTimesCF1 = jumuahTimes[1].castlefield.firstJamaat;

            this.jumuahTimesTF1 = jumuahTimes[2].townfieldhouse.firstJamaat;

            this.jumuahTimesMF1 = jumuahTimes[3].micklefield.firstJamaat;
        });
    }

    ngOnInit() {
    }

}
