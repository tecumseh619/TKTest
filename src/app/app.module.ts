import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { LobbyPage } from '../pages/lobby/lobby';
import { MyApp } from './app.component';
import { QuestionPage } from '../pages/question/question'; 
import { HistoryPage } from '../pages/history/history'; 
import { ResultsPage } from '../pages/results/results';
import { AppUserProvider } from '../providers/app-user/app-user';
import { LandingPage } from '../pages/landing/landing';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { HttpModule } from '@angular/http';

let injections: any[]=[
  MyApp,
  LobbyPage,
  QuestionPage,
  HistoryPage,
  ResultsPage,
  LandingPage,
  LoginPage,
  RegisterPage
  ]

@NgModule({
  declarations: injections, 
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: injections,
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AppUserProvider
  ]
})
export class AppModule {}
