import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DictionaryPage } from './dictionary.page';
import { SharedComponentsModule } from "@app/shared-components";

const routes: Routes = [
  {
    path: '',
    component: DictionaryPage
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
  declarations: [DictionaryPage]
})
export class DictionaryPageModule {}
