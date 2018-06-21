import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RecettesDetailPage } from '../recettes-detail/recettes-detail';

/**
 * Generated class for the RecettesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-recettes',
  templateUrl: 'recettes.html',
})
export class RecettesPage {

  recettes: any[];
  ingredients: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.recettes = [
      {
        nom: 'Salade de saison',
        description: 'Une salade avec des artichaut',
        image: '../../assets/imgs/salade.png',
        ingredients: [
          {
            nom: 'Salade',
            nb: 1
          },
          {
            nom: 'Artichaut',
            nb: 3
          },
          {
            nom: 'Crouton',
            nb: 12
          }
        ]
      },
      {
        nom: 'Pizza aux anchois',
        description: 'Une pizza de la mer',
        image: '../../assets/imgs/pizza.png',
        ingredients: [
          {
            nom: 'Tomate',
            nb: 3
          },
          {
            nom: 'Anchois',
            nb: 6
          },
          {
            nom: 'Fromage',
            nb: 2
          }
        ]
      },
      {
        nom: 'Tarte tatin',
        description: 'Une tarte renversante',
        image: '../../assets/imgs/tarte.png',
        ingredients: [
          {
            nom: 'Pate à tarte',
            nb: 1
          },
          {
            nom: 'Pomme',
            nb: 6
          }
        ]
      }
    ]
  }

  GoToDetail(recette) {
    this.navCtrl.push(RecettesDetailPage, { recette: recette });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecettesPage');
  }

}
