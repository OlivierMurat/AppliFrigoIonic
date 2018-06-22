import { Injectable } from '@angular/core';
import { Storage } from "@ionic/storage";
import { Ingredient } from "../../interfaces/ingredient";

const INGREDIENT_KEY = "ingredient_";

@Injectable()
export class IngredientApiProvider {

  constructor(private storage: Storage) {
  }

  getAll(): Promise<Ingredient[]> {
    return new Promise(resolve => {
      let results: Ingredient[] = [];
      this.storage
        .keys()
        .then(keys =>
          keys
            .filter(key => key.includes(INGREDIENT_KEY))
            .forEach(key =>
              this.storage.get(key).then(data => results.push(JSON.parse(data)))
            )
        );
      return resolve(results);
    });
  }

  add(ingredient: Ingredient) {
    this.storage.set(this.getKey(ingredient), JSON.stringify(ingredient));
  }
  
  lessIngredient(ingredient: Ingredient){
    ingredient.quantity -= 1;
    this.storage.set(this.getKey(ingredient), JSON.stringify(ingredient));
  }

  moreIngredient(ingredient: Ingredient) {
    ingredient.quantity += 1;
    this.storage.set(this.getKey(ingredient), JSON.stringify(ingredient));
  }

  delete(ingredient: Ingredient) {
    this.storage.remove(this.getKey(ingredient));
  }

  getKey(ingredient: Ingredient) {
    return INGREDIENT_KEY + ingredient.id.toString();
  }

}
