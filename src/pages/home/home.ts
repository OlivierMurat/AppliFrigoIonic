import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FrigoPage } from '../frigo/frigo';
import { RecettesPage } from '../recettes/recettes';
import { PlanificationPage } from '../planification/planification';
import { ListePage } from '../liste/liste';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) { }
  /*
    GoToFrigo() {
      this.navCtrl.push(FrigoPage);
    }
    GoToRecettes() {
      this.navCtrl.push(RecettesPage);
    }
    GoToPlanification() {
      this.navCtrl.push(PlanificationPage);
    }
    GoToListe() {
      this.navCtrl.push(ListePage);
    }
  */

}