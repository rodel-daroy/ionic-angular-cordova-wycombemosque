import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {TabsPage} from './tabs.page';

const routes: Routes = [
    {
        path: 'pages',
        component: TabsPage,
        children: [
            {
                path: 'HomePage',
                loadChildren: () => import('./../../pages/home/home.module').then(m => m.HomePageModule)
            },
            {
                path: 'SettingsPage',
                loadChildren: () => import('./../../pages/settings/settings.module').then(m => m.SettingsPageModule)
            },
            {
                path: 'AdhaanAudioPage',
                loadChildren: () => import('./../../pages/adhaan-audio/adhaan-audio.module').then(m => m.AdhaanAudioPageModule)
            },
            {
                path: 'SiteSettingsPage',
                loadChildren: () => import('./../../pages/site-settings/site-settings.module').then(m => m.SiteSettingsPageModule)
            },
            {
                path: 'MenuPage',
                loadChildren: () => import('./../../pages/menu/menu.module').then(m => m.MenuPageModule)
            },
            {
                path: 'MonthsPage',
                loadChildren: () => import('./../../pages/months/months.module').then(m => m.MonthsPageModule)
            },
            {
                path: 'StartTimesPage',
                loadChildren: () => import('./../../pages/start-times/start-times.module').then(m => m.StartTimesPageModule)
            },
            {
                path: 'JamaatMonthsPage',
                loadChildren: () => import('./../../pages/jamaat-months/jamaat-months.module').then(m => m.JamaatMonthsPageModule)
            },
            {
                path: 'JamaatTimesPage',
                loadChildren: () => import('./../../pages/jamaat-times/jamaat-times.module').then(m => m.JamaatTimesPageModule)
            },
            {
                path: 'JumuahTimesPage',
                loadChildren: () => import('./../../pages/jumuah-times/jumuah-times.module').then(m => m.JumuahTimesPageModule)
            },
            {
                path: 'MosqueRadioPage',
                loadChildren: () => import('./../../pages/mosque-radio/mosque-radio.module').then(m => m.MosqueRadioPageModule)
            },
            {
                path: 'RamadhanPage',
                loadChildren: () => import('./../../pages/ramadhan/ramadhan.module').then(m => m.RamadhanPageModule)
            },
            {
                path: 'ContactUsPage',
                loadChildren: () => import('./../../pages/contact-us/contact-us.module').then(m => m.ContactUsPageModule)
            },
            {
                path: 'EnquiryPage',
                loadChildren: () => import('./../../pages/enquiry/enquiry.module').then(m => m.EnquiryPageModule)
            },
            {
                path: 'AboutPage',
                loadChildren: () => import('./../../pages/about/about.module').then(m => m.AboutPageModule)
            },
            {
                path: 'AdminLoginPage',
                loadChildren: () => import('./../../pages/admin-login/admin-login.module').then(m => m.AdminLoginPageModule)
            },
            {
                path: 'AdminAreaPage',
                loadChildren: () => import('./../../pages/admin-area/admin-area.module').then(m => m.AdminAreaPageModule)
            },
            {
                path: 'PushNotsPage',
                loadChildren: () => import('./../../pages/push-nots/push-nots.module').then(m => m.PushNotsPageModule)
            },
            {
                path: 'NewSlidePage',
                loadChildren: () => import('./../../pages/new-slide/new-slide.module').then(m => m.NewSlidePageModule)
            }
        ]
    },
    {
        path: '',
        redirectTo: '/TabsPage/pages/HomePage',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class TabsPageRoutingModule {
}
