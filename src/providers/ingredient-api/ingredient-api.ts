import { Injectable } from '@angular/core';
import { Storage } from "@ionic/storage";
import { Ingredient } from "../../interfaces/ingredient";

const INGREDIENT_KEY = "ingredient_";

@Injectable()
export class IngredientApiProvider {

  constructor(private storage: Storage) {
    console.log('Hello IngredientApiProvider Provider');
  }

  add(ingredient: Ingredient) {
    this.storage.set(this.getKey(ingredient), JSON.stringify(ingredient));
  }

  delete(ingredient: Ingredient) {
    this.storage.remove(this.getKey(ingredient));
  }

  getKey(ingredient: Ingredient) {
    return INGREDIENT_KEY + ingredient.id.toString();
  }

}