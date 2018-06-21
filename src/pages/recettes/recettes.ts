import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RecettesDetailPage } from '../recettes-detail/recettes-detail';
import { Ingredient } from '../../interfaces/ingredient'
import { Recipe } from '../../interfaces/recipe'


@IonicPage()
@Component({
  selector: 'page-recettes',
  templateUrl: 'recettes.html',
})
export class RecettesPage {

  recettes: Recipe[];
  ingredients: Ingredient[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.recettes = [
      {
        name: 'Salade de saison',
        description: 'Une salade avec des artichaut',
        image: '../../assets/imgs/salade.png',
        ingredients: [
          {
            name: 'Salade',
            quantity: 1,
            unit: 'unité',
          },
          {
            name: 'Artichaut',
            quantity: 3,
            unit: 'unité',
          },
          {
            name: 'Crouton',
            quantity: 12,
            unit: 'unité'
          }
        ]
      },
      {
        name: 'Pizza aux anchois',
        description: 'Une pizza de la mer',
        image: '../../assets/imgs/pizza.png',
        ingredients: [
          {
            name: 'Tomate',
            quantity: 3,
            unit: 'unité'
          },
          {
            name: 'Anchois',
            quantity: 6,
            unit: 'unité'
          },
          {
            name: 'Fromage',
            quantity: 2,
            unit: 'unité'
          }
        ]
      },
      {
        name: 'Tarte tatin',
        description: 'Une tarte renversante',
        image: '../../assets/imgs/tarte.png',
        ingredients: [
          {
            name: 'Pate à tarte',
            quantity: 1,
            unit: 'unité'
          },
          {
            name: 'Pomme',
            quantity: 6,
            unit: 'unité'
          }
        ]
      }
    ]
  }

  GoToDetail(recette) {
    this.navCtrl.push(RecettesDetailPage, { recette: recette });
  }

  Delete(item) {
    var index = this.recettes.indexOf(item, 0);
    if (index > -1) {
      this.recettes.splice(index, 1);
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecettesPage');
  }

}
