import { Injectable } from '@angular/core';
import { Storage } from "@ionic/storage";
import { Schedule } from "../../interfaces/schedule";

const LISTING_KEY = "listing_";

@Injectable()
export class ScheduleApiProvider {

  constructor(private storage: Storage) {
    console.log('Hello ScheduleApiProvider Provider');
  }

  getAll(): Promise<Schedule[]> {
    return new Promise(resolve => {
      let results: Schedule[] = [];
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

  add(listing: Schedule) {
    this.storage.set(this.getKey(listing), JSON.stringify(listing));
  }

  editQuantity() { }

  delete(listing: Schedule) {
    this.storage.remove(this.getKey(listing));
  }

  getKey(listing: Schedule) {
    return LISTING_KEY + listing.id.toString();
  }

}
