import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListPage } from '../../pages/list/list';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public navController: NavController
  constructor(public navCtrl: NavController) {

  }

      YourFancyButton(){
    this.navController.setRoot(ListPage);
    }
}
