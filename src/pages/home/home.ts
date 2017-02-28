import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { OtherPage } from '../otherPage/otherPage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public myString: string = "Soy una cadena";
  public myJSON: any = {text: 'Soy una propiedad de JSON'};
  public otherPage: any = OtherPage;

  constructor(public navCtrl: NavController) {
    
  }

  gotoOtherPage(){
    this.navCtrl.push(OtherPage, 
    {text: "Soy un JSON enviado desde push"});
  }

}
