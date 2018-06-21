import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FrigoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-frigo',
  templateUrl: 'frigo.html',
})
export class FrigoPage {

  aliments: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.aliments = [
      {
        nom: 'Salade',
        nb: 2
      },
      {
        nom: 'Tomate',
        nb: 5
      },
      {
        nom: 'Oignon',
        nb: 6
      }
    ]
  }

  More(item) {
    item.nb += 1;
  }

  Less(item) {
    item.nb -= 1;
  }

  Delete(item) {
    var index = this.aliments.indexOf(item, 0);
    if (index > -1) {
      this.aliments.splice(index, 1);
    }
  }

  Add(nom, nb) {
    nb = +nb;
    this.aliments.push({ nom, nb });
    console.log(this.aliments)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FrigoPage');
  }
}