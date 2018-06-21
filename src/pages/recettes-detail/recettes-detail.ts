import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-recettes-detail',
  templateUrl: 'recettes-detail.html',
})
export class RecettesDetailPage {

  recette: { ingredients: any[] };

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.recette = this.navParams.get("recette");
  }

  More(item) {
    item.nb += 1;
  }

  Less(item) {
    item.nb -= 1;
  }

  Delete(item) {
    var index = this.recette.ingredients.indexOf(item, 0);
    if (index > -1) {
      this.recette.ingredients.splice(index, 1);
    }
  }

  Add(nom, nb) {
    nb = +nb;
    this.recette.ingredients.push({ nom, nb });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecettesDetailPage');
  }

}
