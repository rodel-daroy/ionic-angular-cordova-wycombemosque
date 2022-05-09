import {Component, OnInit} from '@angular/core';
import {NavController} from '@ionic/angular';
import {InAppBrowser} from '@ionic-native/in-app-browser/ngx';

@Component({
    selector: 'app-mosque-radio',
    templateUrl: './mosque-radio.page.html',
    styleUrls: ['./mosque-radio.page.scss'],
})
export class MosqueRadioPage implements OnInit {

    constructor(public navCtrl: NavController,
                private iab: InAppBrowser) {
    }

    ngOnInit() {
    }

    openJubileeRadioURL() {
        const browser = this.iab.create('http://jubilee.musjid.uk/', 'location=no');
    }

    openCastlefiedlRadioURL() {
        const browser = this.iab.create('http://castlefield.musjid.uk/', 'location=no');
    }

    openTownfieldRadioURL() {
        const browser = this.iab.create('http://townfield.musjid.uk/', 'location=no');
    }

    openMicklefieldRadioURL() {
        const browser = this.iab.create('http://micklefield.musjid.uk/', 'location=no');
    }

}
