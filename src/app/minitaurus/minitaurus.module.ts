import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MinitaurusPage } from './minitaurus.page';
import { SharedComponentsModule } from "~app/shared-components";

const routes: Routes = [
    {
        path: '',
        component: MinitaurusPage,
        children: [
            {
                path: 'part1',
                children: [
                    {
                        path: '',
                        loadChildren: () => import('../minitaurus-part1/minitaurus-part1.module').then(m => m.MinitaurusPart1PageModule)
                    }
                ]
            },
            {
                path: 'part2',
                children: [
                    {
                        path: '',
                        loadChildren: () => import('../minitaurus-part2/minitaurus-part2.module').then(m => m.MinitaurusPart2PageModule)
                    }
                ]
            },
            {
                path: 'part3',
                children: [
                    {
                        path: '',
                        loadChildren: () => import('../minitaurus-part3/minitaurus-part3.module').then(m => m.MinitaurusPart3PageModule)
                    }
                ]
            },
            {
                path: 'part4',
                children: [
                    {
                        path: '',
                        loadChildren: () => import('../minitaurus-part4/minitaurus-part4.module').then(m => m.MinitaurusPart4PageModule)
                    }
                ]
            },
            {
                path: '',
                redirectTo: '/minitaurus/part1',
                pathMatch: 'full'
            }
        ]
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes),
        SharedComponentsModule
    ],
  declarations: [MinitaurusPage]
})
export class MinitaurusPageModule {}
