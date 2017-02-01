import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AboutPage } from '../hello-ionic/hello-ionic';
import {ForgotpasswordPage} from '../forgotpassword/forgotpassword';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController) {}
  
  Submit(){
    this.navCtrl.push(AboutPage);
    this.navCtrl.setRoot(AboutPage);
  }
  ForgotPassword(){
    this.navCtrl.push(ForgotpasswordPage);
    this.navCtrl.setRoot(ForgotpasswordPage);
  }
}

