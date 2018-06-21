import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ListeDetailPage } from '../liste-detail/liste-detail';
import { ListingApiProvider } from "../../providers/listing-api/listing-api";

@IonicPage()
@Component({
  selector: 'page-liste',
  templateUrl: 'liste.html',
})
export class ListePage {


  constructor(public navCtrl: NavController, public navParams: NavParams, private ListingApiProvider: ListingApiProvider) {
  }

  GoToDetail(liste) {
    this.navCtrl.push(ListeDetailPage, { liste: liste });
  }

  Delete(item) {
    this.ListingApiProvider.delete(item);
  }

  AddListe(name) {
    let id = Math.random() + Math.random();
    this.ListingApiProvider.add({ id, name, ingredients });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecettesPage');
  }

}
