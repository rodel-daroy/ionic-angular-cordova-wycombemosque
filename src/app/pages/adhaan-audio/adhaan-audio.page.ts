import {Component, OnInit} from '@angular/core';
import {Platform} from '@ionic/angular';
import {NativeAudio} from '@ionic-native/native-audio/ngx';

@Component({
    selector: 'app-adhaan-audio',
    templateUrl: './adhaan-audio.page.html',
    styleUrls: ['./adhaan-audio.page.scss'],
})
export class AdhaanAudioPage implements OnInit {

    constructor(public platform: Platform,
                private nativeAudio: NativeAudio) {

        this.platform.ready().then(() => {
            console.log('platform ready');

            this.nativeAudio.preloadComplex('uniqueID1', 'assets/audio/makkah.mp3', 1, 1, 0);
            this.nativeAudio.preloadComplex('uniqueID2', 'assets/audio/hsh.mp3', 1, 1, 0);
            this.nativeAudio.preloadComplex('uniqueID3', 'assets/audio/hamaad.mp3', 1, 1, 0);
            this.nativeAudio.preloadComplex('uniqueID4', 'assets/audio/madinah.mp3', 1, 1, 0);
        });
    }

    ngOnInit() {
    }

    playAudioMakkah() {
        console.log('playing audio');

        this.nativeAudio.play('uniqueID1').then(() => {
            console.log('playing audio!');
        }, (err) => {
            console.log('error playing audio: ' + err);
        });
        this.stopAudioHMA();
        this.stopAudioHSH();
        this.stopAudioMadinah();
    }

    stopAudioMakkah() {
        console.log('playing audio');

        this.nativeAudio.stop('uniqueID1').then(() => {
            console.log('stopping audio!');
        }, (err) => {
            console.log('error stopping audio: ' + err);
        });
    }

    playAudioMadinah() {
        console.log('playing audio');

        this.nativeAudio.play('uniqueID4').then(() => {
            console.log('playing audio!');
        }, (err) => {
            console.log('error playing audio: ' + err);
        });
        this.stopAudioHMA();
        this.stopAudioHSH();
        this.stopAudioMakkah();
    }

    stopAudioMadinah() {
        console.log('playing audio');

        this.nativeAudio.stop('uniqueID4').then(() => {
            console.log('stopping audio!');
        }, (err) => {
            console.log('error stopping audio: ' + err);
        });
    }

    playAudioHSH() {
        console.log('playing audio');

        this.nativeAudio.play('uniqueID2').then(() => {
            console.log('playing audio!');
        }, (err) => {
            console.log('error playing audio: ' + err);
        });
        this.stopAudioHMA();
        this.stopAudioMakkah();
        this.stopAudioMadinah();
    }

    stopAudioHSH() {
        console.log('playing audio');

        this.nativeAudio.stop('uniqueID2').then(() => {
            console.log('stopping audio!');
        }, (err) => {
            console.log('error stopping audio: ' + err);
        });
    }

    playAudioHMA() {
        console.log('playing audio');

        this.nativeAudio.play('uniqueID3').then(() => {
            console.log('playing audio!');
        }, (err) => {
            console.log('error playing audio: ' + err);
        });
        this.stopAudioHSH();
        this.stopAudioMakkah();
        this.stopAudioMadinah();
    }

    stopAudioHMA() {
        console.log('playing audio');

        this.nativeAudio.stop('uniqueID3').then(() => {
            console.log('stopping audio!');
        }, (err) => {
            console.log('error stopping audio: ' + err);
        });
    }

    stopAllAudio() {
        this.stopAudioHSH();
        this.stopAudioMakkah();
        this.stopAudioHMA();
        this.stopAudioMadinah();
    }

}
