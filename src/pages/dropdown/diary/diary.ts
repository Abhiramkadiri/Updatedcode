import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {DiarysubmitPage} from '../diarysubmit/diarysubmit';
import {Toast} from 'ionic-native';
import { ToastController } from 'ionic-angular';
@Component({
  selector: 'page-diary',
  templateUrl: 'diary.html'
})
export class DiaryPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  DiarySubmit(){
    this.navCtrl.push(DiarysubmitPage)
  }
showToast(message, position) {
    Toast.show(message, "short", position).subscribe(
        toast => {
            console.log(toast);
        }
    );
}
}
