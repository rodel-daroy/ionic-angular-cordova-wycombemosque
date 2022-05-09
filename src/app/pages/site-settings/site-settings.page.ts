import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Storage} from '@ionic/storage';
import {OneSignal} from '@ionic-native/onesignal/ngx';

import {AngularFireDatabase} from 'angularfire2/database';

@Component({
    selector: 'app-site-settings',
    templateUrl: './site-settings.page.html',
    styleUrls: ['./site-settings.page.scss'],
})
export class SiteSettingsPage implements OnInit {

    site: any;
    siteNotify: boolean;
    prayer_1 = {state: false, snooze: {id: 15, name: '15 mins'}};
    prayer_2 = {state: false, snooze: {id: 15, name: '15 mins'}};
    prayer_3 = {state: false, snooze: {id: 15, name: '15 mins'}};
    prayer_4 = {state: false, snooze: {id: 15, name: '15 mins'}};
    prayer_5 = {state: false, snooze: {id: 15, name: '15 mins'}};
    disabled = false;
    prayers: any;
    sitePrayers;
    onesignalId: any;
    snoozeTimes = [];

    constructor(private router: Router,
                private activatedRoute: ActivatedRoute,
                public storage: Storage,
                private onesignal: OneSignal,
                private angularFireDatabase: AngularFireDatabase) {

        this.activatedRoute.queryParams.subscribe(params => {
            if (this.router.getCurrentNavigation().extras.state) {
                this.site = this.router.getCurrentNavigation().extras.state.site;

                this.onesignal.getIds().then(data => {
                    this.onesignalId = data.userId;
                    this.setupSite();
                });

                this.snoozeTimes = [
                    {id: 5, name: '5 mins'},
                    {id: 10, name: '10 mins'},
                    {id: 15, name: '15 mins'},
                    {id: 20, name: '20 mins'},
                    {id: 25, name: '25 mins'},
                    {id: 30, name: '30 mins'}
                ];

                this.storage.get(this.site).then(data => {
                    console.log(this.site, data);
                    if (data !== null) {
                        this.prayers = data;
                        this.siteNotify = this.prayers.main;
                        this.prayer_1 = this.prayers.prayer_1;
                        this.prayer_2 = this.prayers.prayer_2;
                        this.prayer_3 = this.prayers.prayer_3;
                        this.prayer_4 = this.prayers.prayer_4;
                        this.prayer_5 = this.prayers.prayer_5;
                    } else {
                        const pray = {
                            main: true,
                            prayer_1: {
                                state: false,
                                snooze: {id: 15, name: '15 mins'}
                            },
                            prayer_2: {
                                state: false,
                                snooze: {id: 15, name: '15 mins'}
                            },
                            prayer_3: {
                                state: false,
                                snooze: {id: 15, name: '15 mins'}
                            },
                            prayer_4: {
                                state: false,
                                snooze: {id: 15, name: '15 mins'}
                            },
                            prayer_5: {
                                state: false,
                                snooze: {id: 15, name: '15 mins'}
                            }
                        };
                        this.prayers = pray;
                        this.prayer_1 = this.prayers.prayer_1;
                        this.prayer_2 = this.prayers.prayer_2;
                        this.prayer_3 = this.prayers.prayer_3;
                        this.prayer_4 = this.prayers.prayer_4;
                        this.prayer_5 = this.prayers.prayer_5;
                        this.storage.set(this.site, pray).then();
                    }
                });
            }
        });
    }

    ngOnInit() {
    }

    setupSite() {
        const refs = ['prayer_1', 'prayer_2', 'prayer_3', 'prayer_4', 'prayer_5'];
        refs.forEach(ref => {
            const itemRef = this.angularFireDatabase.list(`users/sites/${this.site}/${ref}`);

            itemRef.query.once('value', data => {
                const values = Object.values(data.val());
                const found = values.filter((el: any) => el.playerId === this.onesignalId);
                if (found.length > 0) {
                    console.log('found', found);
                    this.prayers[`${ref}`] = {
                        state: true,
                        snooze: {id: found[0]['snooze'], name: `${found[0]['snooze']} mins`}
                    };

                    if (ref === 'prayer_1') {
                        this.prayer_1 = this.prayers[`${ref}`];
                    } else if (ref === 'prayer_2') {
                        this.prayer_2 = this.prayers[`${ref}`];
                    } else if (ref === 'prayer_3') {
                        this.prayer_3 = this.prayers[`${ref}`];
                    } else if (ref === 'prayer_4') {
                        this.prayer_4 = this.prayers[`${ref}`];
                    } else if (ref === 'prayer_5') {
                        this.prayer_5 = this.prayers[`${ref}`];
                    }
                } else {
                    console.log('not found');
                }
            });
        });
    }

    snoozeChange(event, prayerType) {

        const itemRef = this.angularFireDatabase.list(`users/sites/${this.site}/${prayerType}`);

        this.prayers[prayerType].snooze = event.value;
        this.storage.set(this.site, this.prayers);

        if (this.prayer_1.state || this.prayer_2.state || this.prayer_3.state || this.prayer_4.state || this.prayer_5) {
            itemRef.query.once('value', data => {
                const generalVal = Object.values(data.val());
                const generalKeys = Object.keys(data.val());
                const keys = [];
                generalKeys.forEach((elem, index) => {
                    keys[index] = elem;
                });
                generalVal.forEach((values: any, index) => {
                    if (values.playerId === this.onesignalId) {
                        itemRef.update(keys[index], {
                            snooze: event.value.id
                        });
                    }
                });
            });
        }
    }

    updateItem() {
        this.prayers.main = this.siteNotify;
        this.disabled = !this.siteNotify;
        this.storage.set(this.site, this.prayers);
    }

    updatePrayers(event, prayer) {
        switch (prayer) {
            case 1:
                this.prayers.prayer_1.state = this.prayer_1.state;
                this.storage.set(this.site, this.prayers);
                this.updateNotification(this.prayer_1.state, 'prayer_1');
                break;
            case 2:
                this.prayers.prayer_2 = this.prayer_2;
                this.storage.set(this.site, this.prayers);
                this.updateNotification(this.prayer_2.state, 'prayer_2');
                break;
            case 3:
                this.prayers.prayer_3 = this.prayer_3;
                this.storage.set(this.site, this.prayers);
                this.updateNotification(this.prayer_3.state, 'prayer_3');
                break;
            case 4:
                this.prayers.prayer_4 = this.prayer_4;
                this.storage.set(this.site, this.prayers);
                this.updateNotification(this.prayer_4.state, 'prayer_4');
                break;
            case 5:
                this.prayers.prayer_5 = this.prayer_5;
                this.storage.set(this.site, this.prayers);
                this.updateNotification(this.prayer_5.state, 'prayer_5');
                break;
        }
    }

    updateNotification(state, prayerType) {

        const itemRef = this.angularFireDatabase.list(`users/sites/${this.site}/${prayerType}`);

        if (!state) {
            itemRef.query.once('value', data => {
                const generalVal = Object.values(data.val());
                const generalKeys = Object.keys(data.val());
                const keys = [];
                generalKeys.forEach((elem, index) => {
                    keys[index] = elem;
                });
                generalVal.forEach((values: any, index) => {
                    if (values.playerId === this.onesignalId) {
                        itemRef.remove(keys[index]);
                    }
                });
            });
        } else {
            itemRef.push({
                playerId: this.onesignalId,
                snooze: this.prayers[prayerType].snooze.id
            });
        }
    }

}
