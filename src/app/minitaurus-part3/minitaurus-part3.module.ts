import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MinitaurusPart3Page } from './minitaurus-part3.page';
import { SharedComponentsModule } from "@app/shared-components";

const routes: Routes = [
  {
    path: '',
    component: MinitaurusPart3Page
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
  declarations: [MinitaurusPart3Page]
})
export class MinitaurusPart3PageModule {}
