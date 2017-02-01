import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Mappage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-mappage',
  templateUrl: 'mappage.html'
})
export class MappagePage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello MappagePage Page');
  }

}
