import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController, Platform } from 'ionic-angular';
import { RecettesDetailPage } from '../recettes-detail/recettes-detail';
import { Ingredient } from '../../interfaces/ingredient'
import { Recipe } from '../../interfaces/recipe'
import { RecipeApiProvider } from "../../providers/recipe-api/recipe-api";


@IonicPage()
@Component({
  selector: 'page-recettes',
  templateUrl: 'recettes.html',
})
export class RecettesPage {

  recettes: Recipe[];
  ingredients: Ingredient[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, private RecipeApiProvider: RecipeApiProvider) {
    this.recettes = [

    ]
  }

  GoToDetail(recette) {
    this.navCtrl.push(RecettesDetailPage, { recette: recette });
  }

  presentAddModal(){
    const modal = this.modalCtrl.create(ModalContentPage);
    modal.present();
  }

  Delete(item) {
    var index = this.recettes.indexOf(item, 0);
    if (index > -1) {
      this.recettes.splice(index, 1);
    }
    this.RecipeApiProvider.delete(item)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecettesPage');
  }

}
@Component({
  templateUrl: 'addmodal.html'
})
export class ModalContentPage {

  constructor(
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController
  ) {
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
