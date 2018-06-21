import { Injectable } from '@angular/core';
import { Storage } from "@ionic/storage";
import { Recipe } from "../../interfaces/recipe";

const RECIPE_KEY = "recipe_";

@Injectable()
export class RecipeApiProvider {

  constructor(private storage: Storage) {
    console.log('Hello RecipeApiProvider Provider');
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


  delete(recipe: Recipe) {
    this.storage.remove(this.getKey(recipe));
  }

  getKey(recipe: Recipe) {
    return RECIPE_KEY + recipe.id.toString();
  }

}
