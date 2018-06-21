import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PlanificationPage } from './planification';

@NgModule({
  declarations: [
    PlanificationPage,
  ],
  imports: [
    IonicPageModule.forChild(PlanificationPage),
  ],
})
export class PlanificationPageModule {}
