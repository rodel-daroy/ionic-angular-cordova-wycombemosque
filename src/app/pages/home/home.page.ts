import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ModalController, NavController, Platform, PopoverController, ToastController} from '@ionic/angular';
import {PayPal, PayPalConfiguration, PayPalPayment} from '@ionic-native/paypal/ngx';

import {HomeModalComponent} from '../../components/home-modal/home-modal.component';

import {AngularFireDatabase} from 'angularfire2/database';

declare var paypal: any;

@Component({
    selector: 'app-home',
    templateUrl: './home.page.html',
    styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

    today = new Date();
    islamicDate: any;
    prayerTimes = null;
    sitePrayers = [{}];
    donate_amount: any;
    show_custom = false;
    paypal_initialized = false;

    androidApiKey = '20a3b9b9393e71c85b0d361810db1935';
    iosApiKey = 'd37c638363aef29183382cd28dce739a';

    @ViewChild('paypalbuttoncontainer') paypalbuttoncontainer: ElementRef;

    constructor(public httpClient: HttpClient,
                public platform: Platform,
                private modalController: ModalController,
                public navController: NavController,
                private popoverController: PopoverController,
                private toastController: ToastController,
                private payPal: PayPal,
                private angularFireDatabase: AngularFireDatabase) {

        const month = new Date().toLocaleString('en-us', {month: 'long'});
        const monthDay = new Date().getDate();

        this.angularFireDatabase.list('mosque').query.once('value', data => {
            const thisMonth = data.val().filter(data1 => data1.monthName === month);
            const thisDay = thisMonth[0].days.filter(month1 => {
                return Number(month1.Date) === monthDay;
            });
            this.prayerTimes = thisDay[0];
        });

        this.angularFireDatabase.list('site1/congregationalPrayers').query.once('value', data => {
            const thisMonth = data.val().filter(data1 => data1.monthName === month);
            const thisDay = thisMonth[0].days.filter(month1 => {
                return Number(month1.Date) === monthDay;
            });
            thisDay[0].name = 'Jubilee Road';
            this.sitePrayers[0] = thisDay[0];
        });

        this.angularFireDatabase.list('site2/congregationalPrayers').query.once('value', data => {
            const thisMonth = data.val().filter(data1 => data1.monthName === month);
            const thisDay = thisMonth[0].days.filter(month1 => {
                return Number(month1.Date) === monthDay;
            });
            thisDay[0].name = 'Castlefield';
            this.sitePrayers[1] = thisDay[0];
        });

        this.angularFireDatabase.list('site3/congregationalPrayers').query.once('value', data => {
            const thisMonth = data.val().filter(data1 => data1.monthName === month);
            const thisDay = thisMonth[0].days.filter(month1 => {
                return Number(month1.Date) === monthDay;
            });
            thisDay[0].name = 'Townfield House';
            this.sitePrayers[2] = thisDay[0];
        });

        this.angularFireDatabase.list('site4/congregationalPrayers').query.once('value', data => {
            const thisMonth = data.val().filter(data1 => data1.monthName === month);
            const thisDay = thisMonth[0].days.filter(month1 => {
                return Number(month1.Date) === monthDay;
            });
            thisDay[0].name = 'Micklefield';
            this.sitePrayers[3] = thisDay[0];
        });
    }

    ngOnInit() {
    }

    ionViewDidEnter() {
        this.httpClient.get(`https://cors-anywhere.herokuapp.com/https://www.moonsighting.org.uk/scripts/hijri.php?return=json&country=GB&apikey=${
                this.platform.is('ios') ? this.iosApiKey : this.androidApiKey
            }`
        ).subscribe((response: any) => {
            console.log('ionViewDidEnter =====>', response);
            this.islamicDate = `${response.islamic[0]}, ${response.islamic[1]} ${response.islamic[2]} ${response.islamic[3]}`;
        });

        this.setupPayPay();
    }

    async openModal(title, time) {
        const modal = await this.modalController.create({
            component: HomeModalComponent,
            componentProps: {title, time},
            cssClass: 'home-modal-wrapper'
        });

        return await modal.present();
    }

    checkDonate(amount) {
        amount === '' ? (this.show_custom = true) : (this.donate_amount = amount);
    }

    setupPayPay() {
        if (!this.paypal_initialized) {
            this.initPayPal();
        }
    }

    initPayPal() {
        this.paypal_initialized = true;
        const paypalbuttoncontainer = this.paypalbuttoncontainer.nativeElement as HTMLDivElement;

        const self = this;
        paypal.Buttons({
            createOrder(data, actions) {
                return actions.order.create({
                    intent: 'CAPTURE',
                    purchase_units: [
                        {
                            amount: {
                                value: self.donate_amount
                            }
                        }
                    ]
                });
            },
            async onApprove(data, actions) {
                const toast = await self.toastController.create({
                    message: `Thank you for the donation of £${self.donate_amount}`,
                    duration: 5000,
                    position: 'bottom'
                });

                return await toast.present();
            }
        }).render(paypalbuttoncontainer);
    }

    payWithPayPal() {
        this.payPal.init({
            PayPalEnvironmentProduction: 'AQ9D9u3DHTiRscljqbEVVrmqIZqoj4nX5Z1KFLvlThCXEMoH87anHlqpAQRsIhWHEBeoOt8G2Bhv5owV',
            PayPalEnvironmentSandbox: 'AQ9D9u3DHTiRscljqbEVVrmqIZqoj4nX5Z1KFLvlThCXEMoH87anHlqpAQRsIhWHEBeoOt8G2Bhv5owV'
        }).then(
            () => {
                this.payPal.prepareToRender('PayPalEnvironmentProduction', new PayPalConfiguration({}))
                    .then(
                        () => {
                            const payment = new PayPalPayment(this.donate_amount, 'GBP', 'Description', 'sale');
                            this.payPal.renderSinglePaymentUI(payment).then(
                                () => {
                                    alert('Thank you for your kind donation!');
                                },
                                () => {
                                }
                            );
                        },
                        () => {
                        }
                    );
            },
            () => {
            }
        );
    }

}
