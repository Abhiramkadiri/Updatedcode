import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NotifythanksPage} from '../notifythanks/notifythanks';
/*
  Generated class for the Notifybydate page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-notifybydate',
  templateUrl: 'notifybydate.html'
})
export class NotifybydatePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}
  notifythanks(){
    this.navCtrl.push(NotifythanksPage);
    this.navCtrl.setRoot(NotifythanksPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotifybydatePage');
  }

}
