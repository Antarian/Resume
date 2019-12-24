import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
    },
    {
        path: 'dictionary',
        loadChildren: () => import('./dictionary/dictionary.module').then(m => m.DictionaryPageModule)
    },
    {
        path: 'minitaurus',
        loadChildren: () => import('./minitaurus/minitaurus.module').then(m => m.MinitaurusPageModule)
    },
    {
        path: 'minitaurus-part2',
        redirectTo: 'minitaurus/part2',
        pathMatch: 'full'
    },
    {
        path: 'minitaurus-part3',
        redirectTo: 'minitaurus/part3',
        pathMatch: 'full'
    },
    {
        path: 'minitaurus-part4',
        redirectTo: 'minitaurus/part4',
        pathMatch: 'full'
    },
    { path: 'ionic-aws-deployment', loadChildren: './ionic-aws-deployment/ionic-aws-deployment.module#IonicAwsDeploymentPageModule' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
