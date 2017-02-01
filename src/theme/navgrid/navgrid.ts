import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Navgrid page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-navgrid',
  templateUrl: 'navgrid.html'
})
export class NavgridPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello NavgridPage Page');
  }

}
