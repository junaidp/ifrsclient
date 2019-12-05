import { Component, OnInit } from '@angular/core';
import {Globals} from "../globals";
import { JournalService } from "./journalService";
declare var $: any;

@Component({
  selector: 'app-journal-entries',
  templateUrl: './journal-entries.component.html',
  styleUrls: ['./journal-entries.component.css']
})

export class JournalEntriesComponent implements OnInit {

  constructor(public journalService: JournalService, public globals : Globals) { 
    
  }
  map: Map<string, Map<string, string>>;
  map1 = new Map<String, String>();
  calculate() {
   
  }

  ngOnInit() {
    alert("hello")
    var data = {
   
      leaseContractNo: this.globals.leaseContractNo,
      classAsset: this.globals.classAsset,
       commencementDate: this.globals.commencementDate,
      paymentsAt: this.globals.paymentsAt,
      annualDiscountRate: this.globals.annualDiscountRate,
      leaseTerm: this.globals.leaseTerm,
      expectedPeriod: this.globals.expectedPeriod,
      leasePayment: this.globals.leasePayment,
      paymentIntervals: this.globals.paymentIntervals,
      initialDirectCost: this.globals.initialDirectCost,
      guaranteedResidualValue: this.globals.guaranteedResidualValue,
      usefulLifeOfTheAsset: this.globals.usefulLifeOfTheAsset,
      escalation: this.globals.escalation,
      escalationAfterEvery: this.globals.escalationAfterEvery
    };
   // alert("calculation for " + this.globals.userName)
   alert(JSON.stringify(data));
   
    this.journalService.calculate(data).then(response => {
      this.map = new Map(Object.entries(response.data));
      let values = this.map.values();
  for (let item of values) {
    console.log(item.size);
    console.log(item);
    
  }
      console.log(JSON.stringify(response.data))
      alert(JSON.stringify(response.data))
      
      /*console.log("In MAP ENTRIES");

      this.map.forEach((value: Map<string, string>, key: string) => {
        for (var key in value) {
          if (value.hasOwnProperty(key)) {
            console.log(key + " -> " + value[key]);
          }
        }
      });*/
    });
  }

}
