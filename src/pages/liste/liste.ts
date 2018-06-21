import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController, Platform } from 'ionic-angular';
import { ListeDetailPage } from '../liste-detail/liste-detail';
import { ListingApiProvider } from "../../providers/listing-api/listing-api";

@IonicPage()
@Component({
  selector: 'page-liste',
  templateUrl: 'liste.html',
})
export class ListePage {


  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public navParams: NavParams, private ListingApiProvider: ListingApiProvider) {
  }

  GoToDetail(liste) {
    this.navCtrl.push(ListeDetailPage, { liste: liste });
  }

  presentAddModal() {
    const modal = this.modalCtrl.create(ModalListContentPage);
    modal.present();
  }

  Delete(item) {
    this.ListingApiProvider.delete(item);
  }

  AddListe(name, ingredients) {
    let id = Math.random() + Math.random();
    this.ListingApiProvider.add({ id, name, ingredients });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecettesPage');
  }

}
@Component({
  templateUrl: 'addmodal.html'
})
export class ModalListContentPage {

  constructor(
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController
  ) {
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
