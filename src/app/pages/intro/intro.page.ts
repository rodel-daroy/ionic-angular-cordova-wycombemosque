import {Component, OnInit} from '@angular/core';
import {NavController} from '@ionic/angular';
import {Storage} from '@ionic/storage';

import {AngularFireDatabase} from 'angularfire2/database';

@Component({
    selector: 'app-intro',
    templateUrl: './intro.page.html',
    styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {

    skipTo: string;
    slides: any;

    constructor(public navController: NavController,
                private storage: Storage,
                private angularFireDatabase: AngularFireDatabase) {

        this.storage.get('user').then(user => {
            if (user === null) {
                this.skipTo = 'TabsPage';
            } else {
                this.skipTo = 'TabsPage';
            }
        });
    }

    ngOnInit() {
        this.init();
    }

    init() {
        const itemRef = this.angularFireDatabase.list('sliders/slides');

        itemRef.query.once('value', data => {
            this.slides = Object.values(data.val()).filter(
                (item: any) => typeof item !== 'boolean' && item.disabled === false
            );
            if (this.slides.length === 0) {
                this.navController.navigateRoot('TabsPage').then();
            }
        });
    }

    skip() {
        this.navController.navigateRoot(this.skipTo).then();
    }

}
