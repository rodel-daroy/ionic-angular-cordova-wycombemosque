import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {AngularFireDatabase} from 'angularfire2/database';

@Component({
    selector: 'app-jamaat-times',
    templateUrl: './jamaat-times.page.html',
    styleUrls: ['./jamaat-times.page.scss'],
})
export class JamaatTimesPage implements OnInit {

    month: any;
    selectedMonth: any;
    mosques = 'jubilee';
    jubileeTab = [{}];
    castlefieldTab = [{}];
    townfieldTab = [{}];
    micklefieldTab = [{}];
    jubileeJamaatTimes = null;
    castlefieldJamaatTimes = null;
    townfieldJamaatTimes = null;
    micklefieldJamaatTimes = null;

    constructor(private router: Router,
                private angularFireDatabase: AngularFireDatabase) {

        const state = this.router.getCurrentNavigation().extras.state;
        if (state) {
            this.month = state.month;
            this.selectedMonth = this.month.monthName;

            this.angularFireDatabase.list('site1/congregationalPrayers').query.once('value', data => {
                this.jubileeJamaatTimes = data.val().filter(data1 => data1.monthName === this.selectedMonth);
                this.jubileeTab = this.jubileeJamaatTimes[0].days;
            });


            this.angularFireDatabase.list('site2/congregationalPrayers').query.once('value', data => {
                this.castlefieldJamaatTimes = data.val().filter(data1 => data1.monthName === this.selectedMonth);
                this.castlefieldTab = this.castlefieldJamaatTimes[0].days;
            });

            this.angularFireDatabase.list('site3/congregationalPrayers').query.once('value', data => {
                this.townfieldJamaatTimes = data.val().filter(data1 => data1.monthName === this.selectedMonth);
                this.townfieldTab = this.townfieldJamaatTimes[0].days;
            });

            this.angularFireDatabase.list('site4/congregationalPrayers').query.once('value', data => {
                this.micklefieldJamaatTimes = data.val().filter(data1 => data1.monthName === this.selectedMonth);
                this.micklefieldTab = this.micklefieldJamaatTimes[0].days;
            });
        }
    }

    ngOnInit() {
    }

}
