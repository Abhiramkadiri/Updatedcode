import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Attendance2Page} from '../attendance2/attendance2';
/*
  Generated class for the Attendance page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-attendance',
  templateUrl: 'attendance.html'
})
export class AttendancePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

attendance2(){

  this.navCtrl.push(Attendance2Page);
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad AttendancePage');
  }

}
