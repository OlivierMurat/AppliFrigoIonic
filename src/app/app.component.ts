import { Component, ViewChild } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Nav } from 'ionic-angular';

import Pages from '../utils/pages';

import { HomePage } from '../pages/home/home';
import { MainMenuPage } from '../pages/main-menu/main-menu';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{ title: string, component: any }>;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();

      this.pages = Pages
    });
  }

  openPage(page) {
    this.nav.setRoot(page.component);
  }
  goHome() {
    this.nav.setRoot(MainMenuPage);
  }
  exitApp() {
    this.nav.setRoot(HomePage);
  }
}

