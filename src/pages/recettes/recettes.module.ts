import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RecettesPage, ModalContentPage } from './recettes';


@NgModule({
  declarations: [
    RecettesPage,
    ModalContentPage,
  ],
  imports: [
    IonicPageModule.forChild(RecettesPage),
  ],
  entryComponents: [
    ModalContentPage
  ],
})
export class RecettesPageModule {}
