import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FirstPage } from '../first/first';

@Component({
  selector: 'page-women',
  templateUrl: 'women.html'
})
export class WomenPage {

  constructor(public navCtrl: NavController) {
  }
  goToFirst(params){
    if (!params) params = {};
    this.navCtrl.push(FirstPage);
  }
}
