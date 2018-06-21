import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListeDetailPage } from './liste-detail';

@NgModule({
  declarations: [
    ListeDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(ListeDetailPage),
  ],
})
export class ListeDetailPageModule {}
