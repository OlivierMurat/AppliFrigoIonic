import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Ingredient } from '../../interfaces/ingredient'
import { IngredientApiProvider } from "../../providers/ingredient-api/ingredient-api";

@IonicPage()
@Component({
  selector: 'page-frigo',
  templateUrl: 'frigo.html',
})
export class FrigoPage {

  aliments: Ingredient[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private IngredientApiProvider: IngredientApiProvider) {
  }

  More(item) {
    this.IngredientApiProvider.lessIngredient(item)
  }

  Less(item) {
    this.IngredientApiProvider.moreIngredient(item)
  }

  Delete(item) {
    this.IngredientApiProvider.delete(item)
  }

  Add(name, quantity, unit) {
    quantity = +quantity;
    let id = Math.random() + Math.random()
    this.IngredientApiProvider.add({ id, name, quantity, unit })
  }

  ionViewDidLoad() {
    this.IngredientApiProvider
      .getAll()
      .then(ingredients => (this.aliments = ingredients));
  }
}