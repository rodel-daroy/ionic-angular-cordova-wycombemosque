import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';


import {IonicStorageModule} from '@ionic/storage';

// import {AngularFireModule} from '@angular/fire';
// import {AngularFireAuthModule} from '@angular/fire/auth';
// import {AngularFireDatabaseModule} from '@angular/fire/database';
// import {AngularFireStorageModule} from '@angular/fire/storage';
import {AngularFireModule} from 'angularfire2';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireStorageModule} from 'angularfire2/storage';

import {HttpClientModule} from '@angular/common/http';
import {MomentModule} from 'ngx-moment';

import {EmailComposer} from '@ionic-native/email-composer/ngx';
import {InAppBrowser} from '@ionic-native/in-app-browser/ngx';
import {NativeAudio} from '@ionic-native/native-audio/ngx';
import {OneSignal} from '@ionic-native/onesignal/ngx';
import {PayPal} from '@ionic-native/paypal/ngx';

import {environment} from '../environments/environment';

@NgModule({
    declarations: [AppComponent],
    entryComponents: [],
    imports: [
        BrowserModule,
        IonicModule.forRoot(),
        AppRoutingModule,


        IonicStorageModule.forRoot(),

        // AngularFireModule.initializeApp(environment.firebaseConfig),
        // AngularFireAuthModule,
        // AngularFireDatabaseModule,
        // AngularFireStorageModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFirestoreModule.enablePersistence(),
        AngularFireAuthModule,
        AngularFireDatabaseModule,
        AngularFireStorageModule,

        HttpClientModule,
        MomentModule
    ],
    providers: [
        StatusBar,
        SplashScreen,
        EmailComposer,
        InAppBrowser,
        NativeAudio,
        OneSignal,
        PayPal,
        {provide: RouteReuseStrategy, useClass: IonicRouteStrategy}
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
