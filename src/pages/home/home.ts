import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ContractService } from '../../providers/contract-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [ContractService]
})
export class HomePage {

  constructor(public navCtrl: NavController, private contractService: ContractService) {

  }
  
  ionViewWillEnter(){
    this.contract();
  }
  
  contract():void {
    this.contractService.getContract().subscribe(
        success => {
            let contractData = JSON.parse(success._body);
            console.log(contractData);
        },
        error => {
            // console.log(error._body);
        }
    );
  }

}
