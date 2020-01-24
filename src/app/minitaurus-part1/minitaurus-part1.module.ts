import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MinitaurusPart1Page } from './minitaurus-part1.page';
import { SharedComponentsModule } from "@app/shared-components";

const routes: Routes = [
  {
    path: '',
    component: MinitaurusPart1Page
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
  declarations: [MinitaurusPart1Page]
})
export class MinitaurusPart1PageModule {}
