import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MinitaurusPart2Page } from './minitaurus-part2.page';
import { SharedComponentsModule } from "@app/shared-components";

const routes: Routes = [
  {
    path: '',
    component: MinitaurusPart2Page
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
  declarations: [MinitaurusPart2Page]
})
export class MinitaurusPart2PageModule {}
