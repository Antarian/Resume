import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { TopToolbarComponent } from '@app/shared-components/top-toolbar';

@NgModule({
    declarations: [
        TopToolbarComponent,
    ],
    imports: [
        CommonModule,
        IonicModule,
    ],
    exports: [
        TopToolbarComponent,
    ],
})
export class SharedComponentsModule {
}
