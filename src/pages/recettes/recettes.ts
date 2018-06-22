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

  presentAddModal() {
    const modal = this.modalCtrl.create(ModalContentPage);
    modal.present();
  }

  Delete(item) {
    this.RecipeApiProvider.delete(item)
  }

  ionViewWillEnter() {
    this.RecipeApiProvider
      .getAll()
      .then(recipes => (this.recettes = recipes));
  }

}
@Component({
  templateUrl: 'addmodal.html'
})
export class ModalContentPage {

  aliments: Ingredient[];

  constructor(
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController,
    private RecipeApiProvider: RecipeApiProvider
  ) {
    this.aliments = [];

  }

  dismiss() {
    this.viewCtrl.dismiss();
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
    let id = Math.random() + Math.random();
    this.aliments.push({ id, name, quantity, unit });
  }

  AddRecipe({ name, description, ingredients }) {
    let id = Math.random() + Math.random();
    //let ingredients = this.aliments;
    // a faire avec la methode base64 pour up des images
    let image = '';
    this.RecipeApiProvider.add({ id, name, description, image, ingredients })
    this.viewCtrl.dismiss();
  }
}
