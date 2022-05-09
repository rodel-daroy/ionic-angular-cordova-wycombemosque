import {Component, OnInit} from '@angular/core';
import {NavigationExtras, Router} from '@angular/router';

import {AngularFireDatabase} from 'angularfire2/database';

@Component({
    selector: 'app-jamaat-months',
    templateUrl: './jamaat-months.page.html',
    styleUrls: ['./jamaat-months.page.scss'],
})
export class JamaatMonthsPage implements OnInit {

    today = new Date();
    calendarMonths = null;

    constructor(private router: Router,
                private angularFireDatabase: AngularFireDatabase) {

        const month = new Date().toLocaleString('en-us', {month: 'long'});
        const monthDay = new Date().getDate();

        this.angularFireDatabase.list('site1/congregationalPrayers').query.once('value', data => {
            return this.calendarMonths = data.val().filter(data1 => data1.monthName);
        });
    }

    ngOnInit() {
    }

    monthSelected(month) {
        const navigationExtras: NavigationExtras = {state: {month}};
        this.router.navigate(['TabsPage/pages/JamaatTimesPage'], navigationExtras).then();
    }

}
