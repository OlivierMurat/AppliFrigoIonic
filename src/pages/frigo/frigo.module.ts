import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FrigoPage } from './frigo';

@NgModule({
  declarations: [
    FrigoPage,
  ],
  imports: [
    IonicPageModule.forChild(FrigoPage),
  ],
})
export class FrigoPageModule {}
