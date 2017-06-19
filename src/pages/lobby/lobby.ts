import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { QuestionPage } from '../question/question'; 
import { HistoryPage } from '../history/history'; 
import { LandingPage } from '../landing/landing';

/**
 * Generated class for the LobbyPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-lobby',
  templateUrl: 'lobby.html',
})
export class LobbyPage {
  
  showLogout: boolean = false; 
        
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

    logout(){
      this.navCtrl.setRoot(LandingPage);
    };
    
  ionViewDidLoad() {
    this.showLogout = this.navParams.get("showLogout");
    console.log('ionViewDidLoad LobbyPage');
  }
  
  takeTest(){
      this.navCtrl.push(QuestionPage);
  }
  
  lookHistory(){
    this.navCtrl.push(HistoryPage);
    }
}

