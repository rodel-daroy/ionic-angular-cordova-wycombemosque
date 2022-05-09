import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'IntroPage',
        pathMatch: 'full'
    },
    {
        path: 'IntroPage',
        loadChildren: () => import('./pages/intro/intro.module').then(m => m.IntroPageModule)
    },
    {
        path: 'TabsPage',
        loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule)
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
