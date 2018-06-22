import { Injectable } from '@angular/core';
import { Storage } from "@ionic/storage";
import { Recipe } from "../../interfaces/recipe";
import { Ingredient } from "../../interfaces/ingredient";

const RECIPE_KEY = "recipe_";

@Injectable()
export class RecipeApiProvider {

  constructor(private storage: Storage) {
  }

  getAll(): Promise<Recipe[]> {
    return new Promise(resolve => {
      let results: Recipe[] = [];
      this.storage
        .keys()
        .then(keys =>
          keys
            .filter(key => key.includes(RECIPE_KEY))
            .forEach(key =>
              this.storage.get(key).then(data => results.push(JSON.parse(data)))
            )
        );
      return resolve(results);
    });
  }

  add(recipe: Recipe) {
    this.storage.set(this.getKey(recipe), JSON.stringify(recipe));
  }

  lessIngredient(recipe: Recipe, index) {
    recipe.ingredients[index].quantity -= 1;
    this.storage.set(this.getKey(recipe), JSON.stringify(recipe));
  }

  moreIngredient(recipe: Recipe, index) {
    recipe.ingredients[index].quantity += 1;
    this.storage.set(this.getKey(recipe), JSON.stringify(recipe));
  }

  addIngredient(recipe: Recipe, ingredient: Ingredient) {
    recipe.ingredients.push(ingredient);
    this.storage.set(this.getKey(recipe), JSON.stringify(recipe));
  }


  delete(recipe: Recipe) {
    this.storage.remove(this.getKey(recipe));
  }

  getKey(recipe: Recipe) {
    return RECIPE_KEY + recipe.id.toString();
  }

}
