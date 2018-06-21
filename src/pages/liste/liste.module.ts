import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListePage, ModalListContentPage } from './liste';

@NgModule({
  declarations: [
    ListePage,
    ModalListContentPage
  ],
  imports: [
    IonicPageModule.forChild(ListePage),
  ],
  entryComponents: [
    ModalListContentPage,
  ]
})
export class ListePageModule {}
