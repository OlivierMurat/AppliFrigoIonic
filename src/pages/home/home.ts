import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MainMenuPage } from '../main-menu/main-menu';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) { }

  onClickStart = function () {
    this.navCtrl.setRoot(MainMenuPage);
  };
}