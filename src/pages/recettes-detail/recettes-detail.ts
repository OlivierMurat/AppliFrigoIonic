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
  ingredients: Ingredient[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private RecipeApiProvider: RecipeApiProvider) {
    this.recette = this.navParams.get("recette");
    this.ingredients = this.navParams.get("recette").ingredients;
  }

  More(item) {
    let index = this.recette.ingredients.indexOf(item)
    this.RecipeApiProvider.moreIngredient(this.recette, index);
  }

  Less(item) {
    let index = this.recette.ingredients.indexOf(item)
    this.RecipeApiProvider.lessIngredient(this.recette, index);
  }

  Delete(item) {
    var index = this.ingredients.indexOf(item, 0);
    if (index > -1) {
      this.ingredients.splice(index, 1);
    }
  }

  Add(name, quantity, unit) {
    quantity = +quantity;
    let id = Math.random() + Math.random()
    this.RecipeApiProvider.addIngredient(this.recette, { id, name, quantity, unit });
  }


}
