import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController, Platform } from 'ionic-angular';
import { ListeDetailPage } from '../liste-detail/liste-detail';
import { ListingApiProvider } from "../../providers/listing-api/listing-api";
import { Ingredient } from '../../interfaces/ingredient';
import { Listing } from '../../interfaces/listing';

@IonicPage()
@Component({
  selector: 'page-liste',
  templateUrl: 'liste.html',
})
export class ListePage {

  listes: Listing[];

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public navParams: NavParams, private ListingApiProvider: ListingApiProvider) {
  }

  GoToDetail(liste) {
    this.navCtrl.push(ListeDetailPage, { liste: liste });
  }

  presentAddModal() {
    const modal = this.modalCtrl.create(ModalListContentPage);
    modal.onDidDismiss(() => {
      this.ListingApiProvider
      .getAll()
      .then(liste => (this.listes = liste)); });
    modal.present();
  }

  More(liste, item) {
    let index = liste.ingredients.indexOf(item)
    this.ListingApiProvider.moreIngredient(liste, index);
  }

  Less(liste, item) {
    let index = liste.ingredients.indexOf(item)
    this.ListingApiProvider.lessIngredient(liste, index);
  }

  Delete(liste, item) {
    let index = liste.ingredients.indexOf(item)
    this.ListingApiProvider.delete(liste, index);
  }

  DeleteListe(item) {
    this.ListingApiProvider.deleteListe(item);
    this.ListingApiProvider
      .getAll()
      .then(liste => (this.listes = liste));
  }

  ionViewWillEnter() {
    this.ListingApiProvider
      .getAll()
      .then(liste => (this.listes = liste));
  }

}
@Component({
  templateUrl: 'addmodal.html'
})
export class ModalListContentPage {

  aliments: Ingredient[];

  constructor(
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController,
    private ListingApiProvider: ListingApiProvider
  ) {
    this.aliments = [];
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  More(item) {
    item.quantity += 1;
  }

  Less(item) {
    item.quantity -= 1;
  }

  Delete(item) {
    var index = this.aliments.indexOf(item, 0);
    if (index > -1) {
      this.aliments.splice(index, 1);
    }
  }

  Add(name, quantity, unit) {
    quantity = +quantity;
    let id = Math.random() + Math.random()
    this.aliments.push({ id, name, quantity, unit });
  }

  AddListe(name, ingredients) {
    let id = Math.random() + Math.random();
    this.ListingApiProvider.add({ id, name, ingredients });
    this.viewCtrl.dismiss();
  }
}
