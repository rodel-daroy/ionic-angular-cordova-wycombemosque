import {Component, OnInit} from '@angular/core';
import {NavController} from '@ionic/angular';
import {InAppBrowser} from '@ionic-native/in-app-browser/ngx';
import {Storage} from '@ionic/storage';

import {AngularFireDatabase} from 'angularfire2/database';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.page.html',
    styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

    webLinks = null;
    soundCloundURL = null;
    cilClickMeetingURL = null;
    cilVideosURL = null;
    adminStatus = null;

    constructor(public navController: NavController,
                private inAppBrowser: InAppBrowser,
                private storage: Storage,
                private angularFireDatabase: AngularFireDatabase) {

        this.angularFireDatabase.list('weblinks').query.once('value', data => {
            this.webLinks = data.val();
            this.soundCloundURL = this.webLinks.soundcloud;
            this.cilClickMeetingURL = this.webLinks.clickmeeting;
            this.cilVideosURL = this.webLinks.cilVideos;
        });

        this.storage.get('loggedAdmin').then(status => {
            this.adminStatus = status;
        });
    }

    ngOnInit() {
    }

    openMonthsPage() {
        this.navController.navigateForward('TabsPage/pages/MonthsPage').then();
    }

    openJamaatMonthsPage() {
        this.navController.navigateForward('TabsPage/pages/JamaatMonthsPage').then();
    }

    openJumuahTimesPage() {
        this.navController.navigateForward('TabsPage/pages/JumuahTimesPage').then();
    }

    openMosqueRadioPage() {
        this.navController.navigateForward('TabsPage/pages/MosqueRadioPage').then();
    }

    openRamadhanPage() {
        this.navController.navigateForward('TabsPage/pages/RamadhanPage').then();
    }

    openContactUsPage() {
        this.navController.navigateForward('TabsPage/pages/ContactUsPage').then();
    }

    openAboutPage() {
        this.navController.navigateForward('TabsPage/pages/AboutPage').then();
    }

    openAdminPage() {
        this.navController.navigateForward('AdminLoginPage').then();
    }

    openCILwebPage() {
        const browser = this.inAppBrowser.create(this.cilClickMeetingURL);
    }

    openCILyouTubePage() {
        const browser = this.inAppBrowser.create(this.cilVideosURL);
    }

    openSoundCloudPage() {
        const browser = this.inAppBrowser.create(this.soundCloundURL);
    }

}
