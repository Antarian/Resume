import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { IonicAwsDeploymentPage } from './ionic-aws-deployment.page';
import { SharedComponentsModule } from '~app/shared-components';

const routes: Routes = [
  {
    path: '',
    component: IonicAwsDeploymentPage
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
  declarations: [IonicAwsDeploymentPage]
})
export class IonicAwsDeploymentPageModule {}
