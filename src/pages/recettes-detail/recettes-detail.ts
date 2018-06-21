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

  recette: any[];

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
    //Ce que je veux faire ici, c'est supprimer l'ingredient envoyé avec "item",
    //Il se trouve dans "ingrédient", qui lui meme se trouve dans "recette"
    //J'accede a "recette" (qui contiens le nom, la description, et l'objet des ingredients ())
    //Mais je n'arrive pas a accedes a ingredients (genre avec "this.recette[3]")
    var index = this.recette[3].indexOf(item, 0);
    if (index > -1) {
      this.recette[3].splice(index, 1);
    }
  }

  Add(nom, nb) {
    nb = +nb;
    this.recette.push({ nom, nb });
    console.log(this.recette)
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad RecettesDetailPage');
  }

}
