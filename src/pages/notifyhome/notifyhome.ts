import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {NotifybydatePage} from '../notifybydate/notifybydate';
import {notifyPage} from '../notify/notify';

@Component({
  selector: 'page-notifyhome',
  templateUrl: 'notifyhome.html'
})
export class NotifyhomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  Gotodatepage(){
    this.navCtrl.push(NotifybydatePage);
  }
  Gotodaypage(){
   this.navCtrl.push(notifyPage);
  }

}
