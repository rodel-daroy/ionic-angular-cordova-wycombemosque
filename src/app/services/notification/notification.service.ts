import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import * as moment from 'moment';

import {AngularFireDatabase} from 'angularfire2/database';

@Injectable({
    providedIn: 'root'
})
export class NotificationService {

    constructor(private httpClient: HttpClient,
                private angularFireDatabase: AngularFireDatabase) {
    }

    todayNotification() {

        const month = new Date().toLocaleString('en-us', {month: 'long'});
        const monthDay = new Date().getDate();

        // General Prayers
        const generalRef = this.angularFireDatabase.database.ref('mosque');
        generalRef.once('value', (snapshot) => {
            if (snapshot.val() !== null) {
                snapshot.val().filter((elem) => {
                    if (elem.monthName === month) {
                        elem.days.filter((status) => {
                            if (Number(status.Date) === monthDay) {
                                this.handleGeneralPrayers(status);
                            }
                        });
                    }
                });
            }
        });

        // site 1
        const site1Ref = this.angularFireDatabase.database.ref('site1');
        site1Ref.once('value', (snapshot) => {
            if (snapshot.val() !== null) {
                snapshot.val().congregationalPrayers.filter(elem => {
                    if (elem.monthName === month) {
                        elem.days.filter(status => {
                            if (Number(status.Date) === monthDay) {
                                this.handleSitePrayers(status, 'Jubilee Road');
                            }
                        });
                    }
                });
            }
        });

        // site 2
        const site2Ref = this.angularFireDatabase.database.ref('site2');
        site2Ref.once('value', (snapshot) => {
            if (snapshot.val() !== null) {
                snapshot.val().congregationalPrayers.filter(elem => {
                    if (elem.monthName === month) {
                        elem.days.filter(status => {
                            if (Number(status.Date) === monthDay) {
                                this.handleSitePrayers(status, 'Castlefield');
                            }
                        });
                    }
                });
            }
        });

        // site 3
        const site3Ref = this.angularFireDatabase.database.ref('site3');
        site3Ref.once('value', (snapshot) => {
            if (snapshot.val() !== null) {
                snapshot.val().congregationalPrayers.filter(elem => {
                    if (elem.monthName === month) {
                        elem.days.filter(status => {
                            if (Number(status.Date) === monthDay) {
                                this.handleSitePrayers(status, 'Townfield House');
                            }
                        });
                    }
                });
            }
        });

        // site 4
        const site4Ref = this.angularFireDatabase.database.ref('site4');
        site4Ref.once('value', (snapshot) => {
            if (snapshot.val() !== null) {
                snapshot.val().congregationalPrayers.filter(elem => {
                    if (elem.monthName === month) {
                        elem.days.filter(status => {
                            if (Number(status.Date) === monthDay) {
                                this.handleSitePrayers(status, 'Micklefield');
                            }
                        });
                    }
                });
            }
        });
    }

    handleGeneralPrayers(prayerTimes) {

        const ref = this.angularFireDatabase.database.ref('users');

        ref.once('value', (snapshot) => {
            const temp = Object.values(snapshot.val());
            const general: any = temp[0];
            const {prayer_1, prayer_2, prayer_3, prayer_4, prayer_5} = general;

            if (prayer_1 !== undefined) {
                const hasChannelId = [];
                for (const key of Object.keys(prayer_1)) {
                    hasChannelId.push(prayer_1[key]);
                }
                this.handleDailyNotification(hasChannelId, 'Fajr', prayerTimes);
            }

            if (prayer_2 !== undefined) {
                const hasChannelId = [];
                for (const key of Object.keys(prayer_2)) {
                    hasChannelId.push(prayer_2[key]);
                }
                this.handleDailyNotification(hasChannelId, 'Dhuhr', prayerTimes);
            }

            if (prayer_3 !== undefined) {
                const hasChannelId = [];
                for (const key of Object.keys(prayer_3)) {
                    hasChannelId.push(prayer_3[key]);
                }
                this.handleDailyNotification(hasChannelId, 'Asr', prayerTimes);
            }

            if (prayer_4 !== undefined) {
                const hasChannelId = [];
                for (const key of Object.keys(prayer_4)) {
                    hasChannelId.push(prayer_4[key]);
                }
                this.handleDailyNotification(hasChannelId, 'Maghrib', prayerTimes);
            }

            if (prayer_5 !== undefined) {
                const hasChannelId = [];
                for (const key of Object.keys(prayer_5)) {
                    hasChannelId.push(prayer_5[key]);
                }
                this.handleDailyNotification(hasChannelId, 'Isha', prayerTimes);
            }
        });
    }

    handleSitePrayers(prayerTimes, site) {

        const ref = this.angularFireDatabase.database.ref('users');

        ref.once('value', (snapshot) => {
            const temp = Object.values(snapshot.val());
            const siteDetails = temp[0][site];

            if (siteDetails !== undefined) {

                const {prayer_1, prayer_2, prayer_3, prayer_4, prayer_5} = siteDetails;

                if (prayer_1 !== undefined) {
                    const playerIds = [];
                    const playerSnooze = [];
                    for (const key of Object.keys(prayer_1)) {
                        playerIds.push(prayer_1[key].playerId);
                        playerSnooze.push(prayer_1[key].snooze);
                    }
                    this.handleDailySiteNotification1(site, playerIds, playerSnooze, 'Fajr', prayerTimes).then();
                }

                if (prayer_2 !== undefined) {
                    const playerIds = [];
                    const playerSnooze = [];
                    for (const key of Object.keys(prayer_2)) {
                        playerIds.push(prayer_2[key].playerId);
                        playerSnooze.push(prayer_2[key].snooze);
                    }
                    // this.handleDailySiteNotification(site, playerIds, playerSnooze, 'Dhuhr', prayerTimes);
                }

                if (prayer_3 !== undefined) {
                    const playerIds = [];
                    const playerSnooze = [];
                    for (const key of Object.keys(prayer_3)) {
                        playerIds.push(prayer_3[key].playerId);
                        playerSnooze.push(prayer_3[key].snooze);
                    }
                    // this.handleDailySiteNotification(site, playerIds, playerSnooze, 'Asr', prayerTimes);
                }

                if (prayer_4 !== undefined) {
                    const playerIds = [];
                    const playerSnooze = [];
                    for (const key of Object.keys(prayer_4)) {
                        playerIds.push(prayer_4[key].playerId);
                        playerSnooze.push(prayer_4[key].snooze);
                    }
                    // this.handleDailySiteNotification(site, playerIds, playerSnooze, 'Maghrib', prayerTimes);
                }

                if (prayer_5 !== undefined) {
                    const playerIds = [];
                    const playerSnooze = [];
                    for (const key of Object.keys(prayer_5)) {
                        playerIds.push(prayer_5[key].playerId);
                        playerSnooze.push(prayer_5[key].snooze);
                    }
                    // this.handleDailySiteNotification(site, playerIds, playerSnooze, 'Isha', prayerTimes);
                }
            }
        });
    }

    handleDailyNotification(ids, type, times) {

        const sendTime = times[type];
        const setTime = new Date(new Date().setHours(Number(sendTime.split(':')[0]), Number(sendTime.split(':')[1])));

        const headers = new HttpHeaders({
            Authorization: 'Basic MTIwZTRjNTUtMzM3My00MjJhLWJkZjEtOGIyM2U4MTk4MGIz',
            'Content-Type': 'application/json; charset=utf-8'
        });

        const channels = [
            'cbef5705-e889-4745-a999-aa2ffeda9044',   // no sound channel ID
            '8ed329c9-c450-4bb9-af5c-b102f6f73dc9',   // Makkah sound notification file 1
            '1e561572-e243-4d2d-9faa-318e0951537a',   // Madinah sound notification file 2
            '737f79a1-56ff-4445-904f-5470af5c2c65',   // Hafiz Sajjad sound notification file 3
            'd8bb2be1-ff91-44eb-ba91-29255c28c35d',   // Hamaad Akram sound notification file 4
        ];

        ids.forEach((elem) => {
            const pushData: any = {
                app_id: '4e9b7545-8822-45d1-ba1e-2a34204efb90',
                include_player_ids: [elem.playerId],
                send_after: setTime,
                contents: {en: `Time for ${type} prayer has started`},
                headings: {en: 'Wycombe Mosque'},
                priority: 10,
            };
            if (elem.channelIndex !== '0') {
                pushData.ios_sound = `${elem.sound}.wav`;
                pushData.android_channel_id = channels[elem.channelIndex];
                pushData.android_sound = elem.sound;
            }
            this.httpClient.post('https://onesignal.com/api/v1/notifications', pushData, {headers}).subscribe(
                (response) => console.log('handleDailyNotification =====> SUCCESS', response),
                (error) => console.log('handleDailyNotification =====> ERROR', error)
            );
        });
    }

    handleDailySiteNotification(siteName, ids, snooze, type, times) {

        const sendTime = times[type];

        ids.forEach((elem, index) => {

            const tempTime = new Date(new Date().setHours(Number(sendTime.split(':')[0]), sendTime.split(':')[1]));
            const setTime = moment(tempTime).subtract(snooze[index], 'minutes').toISOString();
            console.log('setTime =====>', setTime);

            const headers = new HttpHeaders({
                Authorization: 'Basic MTIwZTRjNTUtMzM3My00MjJhLWJkZjEtOGIyM2U4MTk4MGIz',
                'Content-Type': 'application/json; charset=utf-8'
            });

            this.httpClient.post('https://onesignal.com/api/v1/notifications', {
                app_id: '4e9b7545-8822-45d1-ba1e-2a34204efb90',
                include_player_ids: elem.split(),
                send_after: setTime,
                contents: {en: `${type} Jamaat will begin in ${snooze[index]} minutes at ${siteName} mosque.`},
                headings: {en: 'Wycombe Mosque'},
                android_sound: 'notification',
                priority: 10,
            }, {headers}).subscribe(
                (response) => console.log('handleDailySiteNotification =====> SUCCESS', response),
                (error) => console.log('handleDailySiteNotification =====> ERROR', error));
        });
    }


    async handleDailySiteNotification1(siteName, ids, snooze, type, times) {

        const sendTime = times[type];

        await Promise.all(ids.map(async (elem, index) => {
            const tempTime = new Date(new Date().setHours(Number(sendTime.split(':')[0]), sendTime.split(':')[1]));
            const setTime = moment(tempTime).subtract(snooze[index], 'minutes').toISOString();

            const headers = new HttpHeaders({
                Authorization: 'Basic MTIwZTRjNTUtMzM3My00MjJhLWJkZjEtOGIyM2U4MTk4MGIz',
                'Content-Type': 'application/json; charset=utf-8'
            });

            const response = await this.httpClient.post('https://onesignal.com/api/v1/notifications', {
                app_id: '4e9b7545-8822-45d1-ba1e-2a34204efb90',
                include_player_ids: elem.split(),
                send_after: setTime,
                contents: {en: `${type} Jamaat will begin in ${snooze[index]} minutes at ${siteName} mosque.`},
                headings: {en: 'Wycombe Mosque'},
                android_sound: 'notification',
                priority: 10,
            }, {headers}).toPromise();

            console.log('handleDailySiteNotification1 response =====>', response);
        }));
    }


    updateUserSettings() {
        const ref = this.angularFireDatabase.database.ref('users');

        ref.once('value', (snapshot) => {
            const temp = Object.values(snapshot.val());
            const general: any = temp[0];
            const {prayer_1, prayer_2, prayer_3, prayer_4, prayer_5} = general;

            if (prayer_1 !== undefined) {
                for (const key of Object.keys(prayer_1)) {
                    const updateRef = ref.child(`sites/general/prayer_1/${key}`);
                    updateRef.update({
                        channelIndex: '0',
                        sound: 'notification_0'
                    });
                }
            }

            if (prayer_2 !== undefined) {
                for (const key of Object.keys(prayer_2)) {
                    const updateRef = ref.child(`sites/general/prayer_2/${key}`);
                    updateRef.update({
                        channelIndex: '0',
                        sound: 'notification_0'
                    });
                }
            }

            if (prayer_3 !== undefined) {
                for (const key of Object.keys(prayer_3)) {
                    const updateRef = ref.child(`sites/general/prayer_3/${key}`);
                    updateRef.update({
                        channelIndex: '0',
                        sound: 'notification_0'
                    });
                }
            }

            if (prayer_4 !== undefined) {
                for (const key of Object.keys(prayer_4)) {
                    const updateRef = ref.child(`sites/general/prayer_4/${key}`);
                    updateRef.update({
                        channelIndex: '0',
                        sound: 'notification_0'
                    });
                }
            }

            if (prayer_5 !== undefined) {
                for (const key of Object.keys(prayer_5)) {
                    const updateRef = ref.child(`sites/general/prayer_5/${key}`);
                    updateRef.update({
                        channelIndex: '0',
                        sound: 'notification_0'
                    });
                }
            }
        });
    }

}
