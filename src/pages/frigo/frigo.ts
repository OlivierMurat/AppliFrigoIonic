import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Ingredient } from '../../interfaces/ingredient'

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

  aliments: Ingredient[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.aliments = [
      {
        name: 'Salade',
        quantity: 2,
        unit: 'Pièce'
      },
      {
        name: 'Tomate',
        quantity: 5,
        unit: 'Pièce'
      },
      {
        name: 'Oignon',
        quantity: 6,
        unit: 'Pièce'
      }
    ]
  }

  More(item) {
    item.quantity += 1;
  }

  Less(item) {
    item.quantity -= 1;
  }

  Delete(item) {
    var index = this.aliments.indexOf(item, 0);
    if (index > -1) {
      this.aliments.splice(index, 1);
    }
  }

  Add(name, quantity, unit) {
    quantity = +quantity;
    this.aliments.push({ name, quantity, unit });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FrigoPage');
  }
}