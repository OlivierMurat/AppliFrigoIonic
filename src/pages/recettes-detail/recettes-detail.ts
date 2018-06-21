import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RecettesDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

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
  /*
    Add(nom, nb) {
      nb = +nb;
      this.recette.push({ nom, nb });
      console.log(this.recette)
    }
  */

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecettesDetailPage');
  }

}
