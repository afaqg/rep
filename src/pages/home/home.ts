import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import {FacebookPage} from '../facebook/facebook';
import {InfoPage} from '../info/info';
import {SignupPage} from '../signup/signup';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
facebookPage=FacebookPage;
infoPage=InfoPage;
signupPage=SignupPage;
  constructor(public navCtrl: NavController) {

  }

}
