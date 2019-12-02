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
  { path: 'minitaurus-part2', loadChildren: './minitaurus-part2/minitaurus-part2.module#MinitaurusPart2PageModule' },
  { path: 'minitaurus-part3', loadChildren: './minitaurus-part3/minitaurus-part3.module#MinitaurusPart3PageModule' },
  { path: 'minitaurus-part4', loadChildren: './minitaurus-part4/minitaurus-part4.module#MinitaurusPart4PageModule' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
