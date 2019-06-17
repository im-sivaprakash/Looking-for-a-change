import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { OnePage } from '../one/one';   
import { TwoPage } from '../two/two';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
constructor(public navCtrl: NavController) {
    }
    load()
    {
     this.navCtrl.push(OnePage);
    }

    two()
    {
      this.navCtrl.push(TwoPage);
    }
  }


