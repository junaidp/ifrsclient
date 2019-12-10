import { Component, OnInit } from '@angular/core';
import { Globals } from "../globals";
import { JournalService } from "./journalService";
declare var $: any;

@Component({
  selector: 'app-journal-entries',
  templateUrl: './journal-entries.component.html',
  styleUrls: ['./journal-entries.component.css']
})

export class JournalEntriesComponent implements OnInit {

  constructor(public journalService: JournalService, public globals: Globals) {

  }
  map: Map<string, Map<string, string>>;
  map1: Map<String, String>;
  //for dr
  drValue: String;
  drValue1: String;
  drValue2: String;
  drValue3: String;
  drValue4: String;

// for cr
  crValue: String;
  crValue1: String;
  crValue2: String;
  crValue3: String;
  crValue4: String;



//for head of account
  headOfAccount: String;
  headOfAccount1: String;
  headOfAccount2: String;
  headOfAccount3: String;
  headOfAccount4: String;



  date: Date;


  calculate() {

  }

  ngOnInit() {

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
    this.journalService.calculate(data).then(response => {
      this.map = new Map(Object.entries(response.data));
      console.log(this.map);
      this.map1 = this.map.get("6");
      this.drValue = this.map1[22];

      this.map1 = this.map.get("10");
      this.drValue1 = this.map1[22];

      this.map1 = this.map.get("11");
      this.drValue2 = this.map1[22];

      this.map1 = this.map.get("12");
      this.drValue3 = this.map1[22];

      this.map1 = this.map.get("13");
      this.drValue4 = this.map1[22];



      // for cr

      this.map1 = this.map.get("6");
      this.crValue = this.map1[23];

      this.map1 = this.map.get("10");
      this.crValue1 = this.map1[23];

      this.map1 = this.map.get("11");
      this.crValue2 = this.map1[23];

      this.map1 = this.map.get("12");
      this.crValue3 = this.map1[23];

      this.map1 = this.map.get("13");
      this.crValue4 = this.map1[23];



      //ffor head

      this.map1 = this.map.get("6");
      this.headOfAccount = this.map1[20];

      this.map1 = this.map.get("10");
      this.headOfAccount1 = this.map1[20];

      this.map1 = this.map.get("11");
      this.headOfAccount2 = this.map1[20];

      this.map1 = this.map.get("12");
      this.headOfAccount3 = this.map1[20];

      this.map1 = this.map.get("13");
      this.headOfAccount4 = this.map1[20];

  //for date
  this.map1 = this.map.get("8");
  this.date = this.map1[22];

    });
  }

}
