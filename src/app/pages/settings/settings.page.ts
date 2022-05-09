import {Component, OnInit} from '@angular/core';
import {NavigationExtras} from '@angular/router';
import {NavController} from '@ionic/angular';
import {Storage} from '@ionic/storage';
import {OneSignal} from '@ionic-native/onesignal/ngx';

import {AngularFireDatabase} from 'angularfire2/database';

@Component({
    selector: 'app-settings',
    templateUrl: './settings.page.html',
    styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

    prayer_1 = true;
    prayer_2 = true;
    prayer_3 = true;
    prayer_4 = true;
    prayer_5 = true;
    prayers: any;
    onesignalId: string;

    selectedSound1: string;
    selectedSound2: string;
    selectedSound3: string;
    selectedSound4: string;
    selectedSound5: string;

    constructor(public navController: NavController,
                public storage: Storage,
                private onesignal: OneSignal,
                private angularFireDatabase: AngularFireDatabase) {

        this.setupSounds();
        this.storage.get('prayers').then((prayers) => {
            if (prayers) {
                this.prayers = prayers;
                this.prayer_1 = this.prayers.prayer_1;
                this.prayer_2 = this.prayers.prayer_2;
                this.prayer_3 = this.prayers.prayer_3;
                this.prayer_4 = this.prayers.prayer_4;
                this.prayer_5 = this.prayers.prayer_5;
            } else {
                const pray = {prayer_1: true, prayer_2: true, prayer_3: true, prayer_4: true, prayer_5: true};
                this.prayers = pray;
                this.storage.set('prayers', pray).then();
            }
        });

        this.onesignal.getIds().then((data) => {
            console.log('onesignal getIds =====>', data);
            this.onesignalId = data.userId;
        });
    }

    ngOnInit() {
    }

    setupSounds() {
        this.angularFireDatabase.list('users/sites/general/prayer_1').valueChanges().subscribe((elem) => {
            elem.map((el: any) => {
                if (el.playerId === this.onesignalId) {
                    this.selectedSound1 = el.channelIndex;
                }
            });
        });
        this.angularFireDatabase.list('users/sites/general/prayer_2').valueChanges().subscribe((elem) => {
            elem.map((el: any) => {
                if (el.playerId === this.onesignalId) {
                    this.selectedSound2 = el.channelIndex;
                }
            });
        });
        this.angularFireDatabase.list('users/sites/general/prayer_3').valueChanges().subscribe((elem) => {
            elem.map((el: any) => {
                if (el.playerId === this.onesignalId) {
                    this.selectedSound3 = el.channelIndex;
                }
            });
        });
        this.angularFireDatabase.list('users/sites/general/prayer_4').valueChanges().subscribe((elem) => {
            elem.map((el: any) => {
                if (el.playerId === this.onesignalId) {
                    this.selectedSound4 = el.channelIndex;
                }
            });
        });
        this.angularFireDatabase.list('users/sites/general/prayer_5').valueChanges().subscribe((elem) => {
            elem.map((el: any) => {
                if (el.playerId === this.onesignalId) {
                    this.selectedSound5 = el.channelIndex;
                }
            });
        });
    }

    updateItem(prayer) {
        switch (prayer) {
            case 1:
                this.prayers.prayer_1 = this.prayer_1;
                this.storage.set('prayers', this.prayers).then();
                this.updateNotification(prayer, this.prayer_1, 'prayer_1');
                break;
            case 2:
                this.prayers.prayer_2 = this.prayer_2;
                this.storage.set('prayers', this.prayers).then();
                this.updateNotification(prayer, this.prayer_2, 'prayer_2');
                break;
            case 3:
                this.prayers.prayer_3 = this.prayer_3;
                this.storage.set('prayers', this.prayers).then();
                this.updateNotification(prayer, this.prayer_3, 'prayer_3');
                break;
            case 4:
                this.prayers.prayer_4 = this.prayer_4;
                this.storage.set('prayers', this.prayers).then();
                this.updateNotification(prayer, this.prayer_4, 'prayer_4');
                break;
            case 5:
                this.prayers.prayer_5 = this.prayer_5;
                this.storage.set('prayers', this.prayers).then();
                this.updateNotification(prayer, this.prayer_5, 'prayer_5');
                break;
        }
    }

    updateNotification(id, state, prayerType) {
        const itemRef = this.angularFireDatabase.list(`users/sites/general/${prayerType}`);
        if (state) {
            itemRef.push({playerId: this.onesignalId});
        } else {
            itemRef.query.once('value', (data) => {
                console.log('updateNotification =====>', data.val());
                if (data.val()) {
                    const generalVal = Object.values(data.val());
                    const generalKeys = Object.keys(data.val());
                    const keys = [];
                    generalKeys.forEach((elem, index) => {
                        keys[index] = elem;
                    });
                    generalVal.forEach((values: any, index) => {
                        if (values.playerId === this.onesignalId) {
                            itemRef.remove(keys[index]).then(() => console.log('removed'));
                        }
                    });
                }
            });
        }
    }

    openSite(site, id) {
        const navigationExtras: NavigationExtras = {state: {site, id}};
        this.navController.navigateForward(['TabsPage/pages/SiteSettingsPage'], navigationExtras).then();
    }

    changeSound(soundType, prayerType) {
        console.log('changeSound =====>', soundType, prayerType);
        const itemRef = this.angularFireDatabase.list(`users/sites/general/${prayerType}/`);
        itemRef.query.once('value', (data) => {
            if (data.val()) {
                const generalVal = Object.values(data.val());
                const generalKeys = Object.keys(data.val());
                const keys = [];
                generalKeys.forEach((elem, index) => {
                    keys[index] = elem;
                });
                generalVal.forEach((values: any, index) => {
                    if (values.playerId === this.onesignalId) {
                        console.log('changeSound ====>', values.playerId, this.onesignalId);
                        itemRef.update(keys[index], {
                            channelIndex: soundType,
                            sound: `notification_${soundType}`,
                        }).then(() => console.log('updated...'));
                    }
                });
            }

            this.storage.get('sounds').then((sounds) => {
                if (sounds) {
                    const result = JSON.parse(sounds);
                    result[prayerType] = {
                        channelIndex: soundType,
                    };
                    this.storage.set('sounds', JSON.stringify(result)).then();
                } else {
                    const temp = {};
                    temp[prayerType] = {channelIndex: soundType};
                    this.storage.set('sounds', JSON.stringify(temp)).then();
                }
            });
        });
    }

    openAdhaanAudioPage() {
        this.navController.navigateForward('TabsPage/pages/AdhaanAudioPage').then();
    }

}
