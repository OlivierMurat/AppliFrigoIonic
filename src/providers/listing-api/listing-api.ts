import { Injectable } from '@angular/core';
import { Storage } from "@ionic/storage";
import { Listing } from "../../interfaces/listing";

const LISTING_KEY = "listing_";

@Injectable()
export class ListingApiProvider {

  constructor(private storage: Storage) {
  }

  getAll(): Promise<Listing[]> {
    return new Promise(resolve => {
      let results: Listing[] = [];
      this.storage
        .keys()
        .then(keys =>
          keys
            .filter(key => key.includes(LISTING_KEY))
            .forEach(key =>
              this.storage.get(key).then(data => results.push(JSON.parse(data)))
            )
        );
      return resolve(results);
    });
  }

  add(listing: Listing) {
    this.storage.set(this.getKey(listing), JSON.stringify(listing));
  }

  lessIngredient(listing: Listing, index) {
    listing.ingredients[index].quantity -= 1;
    this.storage.set(this.getKey(listing), JSON.stringify(listing));
  }

  moreIngredient(listing: Listing, index) {
    listing.ingredients[index].quantity += 1;
    this.storage.set(this.getKey(listing), JSON.stringify(listing));
  }

  delete(listing: Listing) {
    this.storage.remove(this.getKey(listing));
  }

  deleteListe(listing: Listing) {
    this.storage.remove(this.getKey(listing));
  }

  getKey(listing: Listing) {
    return LISTING_KEY + listing.id.toString();
  }

}
