import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-start-times',
    templateUrl: './start-times.page.html',
    styleUrls: ['./start-times.page.scss'],
})
export class StartTimesPage implements OnInit {

    month: any;

    constructor(private router: Router,
                private activatedRoute: ActivatedRoute) {

        this.activatedRoute.queryParams.subscribe(params => {
            if (this.router.getCurrentNavigation().extras.state) {
                this.month = this.router.getCurrentNavigation().extras.state.month;
            }
        });
    }

    ngOnInit() {
    }

}
