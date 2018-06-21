import { Component, ViewChild } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Nav } from 'ionic-angular';
import { HomePage } from '../pages/home/home';
import { RecettesPage } from '../pages/recettes/recettes';
import { PlanificationPage } from '../pages/planification/planification';
import { ListePage } from '../pages/liste/liste';
import { FrigoPage } from '../pages/frigo/frigo';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{ title: string, component: any }>;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      // used for an example of ngFor and navigation
      this.pages = [
        { title: 'Accueil', component: HomePage },
        { title: 'Frigo', component: FrigoPage },
        { title: 'Recettes', component: RecettesPage },
        { title: 'Planification', component: PlanificationPage },
        { title: 'Liste', component: ListePage }
      ];
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}

