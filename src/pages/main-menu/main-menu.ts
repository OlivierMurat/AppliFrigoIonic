import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import Pages from '../../utils/pages';


/**
 * Generated class for the MainMenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-main-menu',
  templateUrl: 'main-menu.html',
})
export class MainMenuPage {

  pages: Array<{ title: string, component: any, icon: string, color: string }>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.pages = Pages
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainMenuPage');
  }

  openPage(page) {
    this.navCtrl.push(page)
  }

}
