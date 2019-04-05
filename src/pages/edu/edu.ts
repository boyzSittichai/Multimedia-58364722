import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HealthsciPage } from '../healthsci/healthsci';
import { ScitechPage } from '../scitech/scitech';
import { HumanPage } from '../human/human';
import { CollagePage } from '../collage/collage';


/**
 * Generated class for the EduPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-edu',
  templateUrl: 'edu.html',
})
export class EduPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EduPage');
  }
  openFirstPage(){
    this.navCtrl.push(HealthsciPage);
  }
  openFirstPage2(){
    this.navCtrl.push(ScitechPage);
  }
  openFirstPage3(){
    this.navCtrl.push(HumanPage);
  }
  openFirstPage4(){
    this.navCtrl.push(CollagePage);
  }
  

}
