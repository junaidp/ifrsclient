import { Component, OnInit } from "@angular/core";
import { NewLeasejournalentryService } from "./NewLeasejournalentryService";
import { Globals } from "../globals";
import { DisplayError } from "../displayError";
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ViewChild, ElementRef } from '@angular/core';
import { allResolved } from "q";
declare var $: any;

@Component({
  selector: "app-newLeasejournalentry",
  templateUrl: "./newLeasejournalentry.component.html",
  styleUrls: ["./newLeasejournalentry.component.css"]
})
export class NewLeasejournalentryComponent implements OnInit {



  constructor(public newLeasejournalentryservice: NewLeasejournalentryService, public displayError: DisplayError
    , public globals: Globals, private router: Router) { }
  year: Date;
  month: Date;

  map: Map<string, Map<string, string>>;
  map1: Map<String, String>;
  //for dr
  drValue: String;
  drValue1: String;
  drValue2: String;
  drValue3: String;
  drValue4: String;
  drValue5: String;
  drValue6: String;
  drValue7: String;

  // for cr
  crValue: String;
  crValue1: String;
  crValue2: String;
  crValue3: String;
  crValue4: String;
  crValue5: String;
  crValue6: String;
  crValue7: String;



  //for head of account
  headOfAccount: String;
  headOfAccount1: String;
  headOfAccount2: String;
  headOfAccount3: String;
  headOfAccount4: String;
  headOfAccount5: String;
  headOfAccount6: String;
  headOfAccount7: String;

  mainHeadOfAccount: String;
  mainHeadOfAccount1: String;
  mainHeadOfAccount2: String;

  commencementDate: String;

  presentValue: number;
  date: "";
  date1: "";
  date2: "";
  date3: "";
  date4: "";
  date5: "";
  date6: "";
  date7: "";




  ngOnInit() {
    $("#journal_entry_show").on("click", function () {
      $("#journal_entry").toggle("show");
      $("#journal_entry1").toggle("show");

    });
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
      escalationAfterEvery: this.globals.escalationAfterEvery,
      //   year:2019
    };

    this.commencementDate = this.globals.commencementDate,
      this.newLeasejournalentryservice.calculate(data).then(response => {
        this.map = new Map(Object.entries(response.data));

        console.log(response.data)
        //     alert(this.map.size)
        this.map1 = this.map.get("17");
        this.presentValue = this.map1[9];
      }
        ,
        (error): void => {
          //Error callback
          // this.spinner.hide();
          this.displayError.displayErrorMessage(error);

        });
  }

}
// $(document).ready(function () {
//   for (var i = 1; i <= 3; i++) {
//       $('#testing').append('TESTING');
//   }
// });
//     this.map1 = this.map.get("8");
//     this.drValue = this.map1[25];

//     this.map1 = this.map.get("9");
//     this.drValue1 = this.map1[25];

//     this.map1 = this.map.get("11");
//     this.drValue2 = this.map1[25];

//     this.map1 = this.map.get("12");
//     this.drValue3 = this.map1[25];

//     this.map1 = this.map.get("13");
//     this.drValue4 = this.map1[25];

//     this.map1 = this.map.get("15");
//     this.drValue5 = this.map1[25];

//     this.map1 = this.map.get("16");
//     this.drValue6 = this.map1[25];

//     this.map1 = this.map.get("17");
//     this.drValue7 = this.map1[25];



//     // for cr

//     this.map1 = this.map.get("8");
//     this.crValue = this.map1[26]+ 0;

//     this.map1 = this.map.get("9");
//     this.crValue1 = this.map1[26];

//     this.map1 = this.map.get("11");
//     this.crValue2 = this.map1[26]+ 0;

//     this.map1 = this.map.get("12");
//     this.crValue3 = this.map1[26]+ 0;

//     this.map1 = this.map.get("13");
//     this.crValue4 = this.map1[26]+ 0;

//     this.map1 = this.map.get("15");
//     this.crValue5 = this.map1[26]+ 0;

//     this.map1 = this.map.get("16");
//     this.crValue6 = this.map1[26]+ 0;

//     this.map1 = this.map.get("17");
//     this.crValue7 = this.map1[26] + 0;



//     //ffor head

//     this.map1 = this.map.get("8");
//     this.headOfAccount = this.map1[22];

//     this.map1 = this.map.get("9");
//     this.headOfAccount1 = this.map1[23];

//     this.map1 = this.map.get("11");
//     this.headOfAccount2 = this.map1[22];

//     this.map1 = this.map.get("12");
//     this.headOfAccount3 = this.map1[22];

//     this.map1 = this.map.get("13");
//     this.headOfAccount4 = this.map1[23];

//     this.map1 = this.map.get("15");
//     this.headOfAccount5 = this.map1[22];

//     this.map1 = this.map.get("16");
//     this.headOfAccount6 = this.map1[22];

//     this.map1 = this.map.get("17");
//     this.headOfAccount7 = this.map1[23];



// //for date
// // this.map1 = this.map.get("8");
// // this.date = this.map1[22];

// this.map1 = this.map.get("8");
// this.date = this.map1[19];


// this.map1 = this.map.get("11");
// this.date1 = this.map1[19];


// this.map1 = this.map.get("15");
// this.date2 = this.map1[19];

//old cmnt
// this.map1 = this.map.get("9");
// this.date1 = this.map1[19];

// this.map1 = this.map.get("11");
// this.date2 = this.map1[19];

// this.map1 = this.map.get("12");
// this.date3 = this.map1[19];

// this.map1 = this.map.get("13");
// this.date4 = this.map1[19];

// this.map1 = this.map.get("15");
// this.date5 = this.map1[19];

// this.map1 = this.map.get("16");
// this.date6 = this.map1[19];

// this.map1 = this.map.get("17");
// this.date7 = this.map1[19];