import { Component, OnInit } from "@angular/core";
import { FirsttimeadoptionjournalentryService } from "./FirsttimeadoptionjournalentryService";
import { Globals } from "../globals";
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ViewChild, ElementRef } from '@angular/core';
import { allResolved } from "q";
declare var $: any;
@Component({
  selector: "app-firsttimeadoptionjournalentry",
  templateUrl: "./firsttimeadoptionjournalentry.component.html",
  styleUrls: ["./firsttimeadoptionjournalentry.component.css"]
})           
export class FirsttimeadoptionjournalentryComponent implements OnInit {
   constructor(public firsttimeadoptionjournalentryservice: FirsttimeadoptionjournalentryService, public globals: Globals, private router: Router) {}
   year :Date;
   month:Date;

  map: Map<string, Map<string, string>>;
  map1: Map<String, String>;
  //for dr
  commencementDate: String;

  presentValue:number;
 

   ngOnInit() {
    $("#journal_entry_show").on("click", function (){
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

  this.commencementDate= this.globals.commencementDate,
  this.firsttimeadoptionjournalentryservice.calculate(data).then(response => {
    this.map = new Map(Object.entries(response.data));

    console.log(response.data)
//     alert(this.map.size)
    this.map1 = this.map.get("17");
    this.presentValue = this.map1[9];
  });
     }
 
    SignUp(){
    
}
  closeAlert() {
   
}
}