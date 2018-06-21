import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RecettesDetailPage } from './recettes-detail';

@NgModule({
  declarations: [
    RecettesDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(RecettesDetailPage),
  ],
})
export class RecettesDetailPageModule {}
