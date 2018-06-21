import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Recipe } from '../../interfaces/recipe';
import { Ingredient } from '../../interfaces/ingredient';
import { RecipeApiProvider } from "../../providers/recipe-api/recipe-api";


@IonicPage()
@Component({
  selector: 'page-recettes-detail',
  templateUrl: 'recettes-detail.html',
})
export class RecettesDetailPage {

  recette: Recipe;
  ingredient: Ingredient[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private RecipeApiProvider: RecipeApiProvider) {
    this.recette = this.navParams.get("recette");
    this.ingredient = this.navParams.get("recette").ingredients;
  }

  More(item) {
    item.quantity += 1;
  }

  Less(item) {
    item.quantity -= 1;
  }

  Delete(item) {
    var index = this.ingredient.indexOf(item, 0);
    if (index > -1) {
      this.ingredient.splice(index, 1);
    }
  }

  Add(name, quantity, unit) {
    quantity = +quantity;
    let id = Math.random() + Math.random()
    this.RecipeApiProvider.addIngredient(this.recette, { id, name, quantity, unit });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecettesDetailPage');
  }

}
