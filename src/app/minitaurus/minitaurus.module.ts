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
    component: MinitaurusPage
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
