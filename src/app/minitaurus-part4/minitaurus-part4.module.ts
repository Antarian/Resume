import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MinitaurusPart4Page } from './minitaurus-part4.page';
import { SharedComponentsModule } from "@app/shared-components";

const routes: Routes = [
  {
    path: '',
    component: MinitaurusPart4Page
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
  declarations: [MinitaurusPart4Page]
})
export class MinitaurusPart4PageModule {}
