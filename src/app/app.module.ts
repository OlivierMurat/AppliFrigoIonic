import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MainMenuPageModule } from '../pages/main-menu/main-menu.module';
import { FrigoPageModule } from '../pages/frigo/frigo.module';
import { RecettesPageModule } from '../pages/recettes/recettes.module';
import { RecettesDetailPageModule } from '../pages/recettes-detail/recettes-detail.module';
import { PlanificationPageModule } from '../pages/planification/planification.module';
import { ListePageModule } from '../pages/liste/liste.module';
import { IngredientApiProvider } from '../providers/ingredient-api/ingredient-api';
import { RecipeApiProvider } from '../providers/recipe-api/recipe-api';
import { ListingApiProvider } from '../providers/listing-api/listing-api';
import { ScheduleApiProvider } from '../providers/schedule-api/schedule-api';

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    MainMenuPageModule,
    FrigoPageModule,
    RecettesPageModule,
    RecettesDetailPageModule,
    PlanificationPageModule,
    ListePageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    IngredientApiProvider,
    RecipeApiProvider,
    ListingApiProvider,
    ScheduleApiProvider
  ]
})
export class AppModule { }
