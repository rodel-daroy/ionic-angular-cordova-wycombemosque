import {Component} from '@angular/core';

import {Platform} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {Storage} from '@ionic/storage';
import {OneSignal} from '@ionic-native/onesignal/ngx';

import {AngularFireDatabase} from 'angularfire2/database';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss']
})
export class AppComponent {

    rootPage: string;
    user: any;

    constructor(private platform: Platform,
                private splashScreen: SplashScreen,
                private statusBar: StatusBar,
                private storage: Storage,
                private oneSignal: OneSignal,
                private angularFireDatabase: AngularFireDatabase) {

        this.initUser();
        this.platform.ready().then(() => {
            this.initOnesignal();
            this.setupUser();
            this.statusBar.styleBlackOpaque();
            setTimeout(() => {
                this.splashScreen.hide();
            }, 1000);
        });
    }

    initOnesignal() {
        this.oneSignal.startInit('4e9b7545-8822-45d1-ba1e-2a34204efb90');
        this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);

        this.oneSignal.handleNotificationReceived().subscribe((data) => {
            console.log('handleNotificationReceived =====>', data.payload);
        });

        this.oneSignal.handleNotificationOpened().subscribe((data) => {
            console.log('handleNotificationOpened =====>', data);
        });

        this.oneSignal.endInit();
    }

    initUser() {
        this.angularFireDatabase.list('sliders').query.once('child_added', (data) => {
            if (data.val()) {
                this.rootPage = 'IntroPage';
            } else {
                this.storage.get('user').then((user) => {
                    if (!user) {
                        this.rootPage = 'TabsPage';
                    } else {
                        this.rootPage = 'TabsPage';
                    }
                });
            }
            this.splashScreen.hide();
        });
    }

    setupUser() {
        this.oneSignal.getIds().then((onesignaldata) => {
            this.storage.get('initUser').then((data) => {
                if (data === null) {
                    const refs = ['prayer_1', 'prayer_2', 'prayer_3', 'prayer_4', 'prayer_5'];
                    refs.forEach((ref) => {
                        const itemRef = this.angularFireDatabase.database.ref(`users/sites/general/${ref}`);
                        itemRef.once('value', (data1) => {
                            const values = Object.values(data1.val());
                            const found = values.filter(
                                (el: any) => el.playerId === onesignaldata.userId
                            );
                            if (found.length < 1) {
                                console.log('fresh user =====>');
                                itemRef.push({
                                    channelIndex: 0,
                                    playerId: onesignaldata.userId,
                                    sound: 'nil',
                                });
                            }
                        });
                    });
                    this.storage.set('initUser', true).then();
                }
            });
        });
    }

}
