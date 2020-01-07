import { Component, OnInit } from "@angular/core";
import { Firsttimeadoptionreportingperiodservice } from "./firsttimeadoptionreportingperiodcomponentservice";import { Globals } from "../globals";
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ViewChild, ElementRef } from '@angular/core';
import { AuthService } from '../auth.service';
import { TouchSequence } from "selenium-webdriver";
declare var $: any;
@Component({
  selector: 'app-firsttimeadoptionreportingperiod',
  templateUrl: './firsttimeadoptionreportingperiod.component.html',
  styleUrls: ['./firsttimeadoptionreportingperiod.component.css']
})


 export class FirsttimeadoptionreportingperiodComponent implements OnInit {
  isLoggedIn = true;
  constructor(public Firsttimeadoptionreportingperiodservice: Firsttimeadoptionreportingperiodservice, public globals : Globals) { }
 
  map1: Map<String, String>;
  presentValue: number;

  //first tab
  leaseContractNo = "";
  classAsset = "";
  commencementDate ="2019-03-11";
  leaseName = "";
  lessorName = "";
  leasseeName = "";
  location = "";
  otherCondition = "";




  //2nd tab question/answer

  answer1 = "Select here";
  answer2 = "Select here";
  answer3 = "Select here";
  answer4 = "Select here";
  answer5 = "Select here";
  answer6 = "Select here";
  answer6new = "Select here";
  answer7 = "Select here";


  //3rd tab
  paymentsAt = "Beginning";
  annualDiscountRate = "3";
  leaseTerm = "10";
  expectedPeriod = "10";
  leasePayment = "2670000";
  paymentIntervals = "Yearly";
  initialDirectCost = "0";
  guaranteedResidualValue = "1000000";
  usefulLifeOfTheAsset = "10";
  escalation = "30";
  escalationAfterEvery = "10";
  contractCurrency = "";
  map: Map<string, Map<string, string>>;

//getting user
userId = "1133"
  calculate() {




    var data = {
   
      leaseContractNo: this.leaseContractNo,
      classAsset: this.classAsset,
      commencementDate: this.commencementDate,
      paymentsAt: this.paymentsAt,
      annualDiscountRate: this.annualDiscountRate,
      leaseTerm: this.leaseTerm,
      expectedPeriod: this.expectedPeriod,
      leasePayment: this.leasePayment,
      paymentIntervals: this.paymentIntervals,
      initialDirectCost: this.initialDirectCost,
      guaranteedResidualValue: this.guaranteedResidualValue,
      usefulLifeOfTheAsset: this.usefulLifeOfTheAsset,
      escalation: this.escalation,
      escalationAfterEvery: this.escalationAfterEvery,
      
    };
   
    this.globals.leaseContractNo= this.leaseContractNo,
    this.globals.classAsset= this.classAsset,
    this.globals.commencementDate= this.commencementDate,
    this.globals.paymentsAt= this.paymentsAt,
    this.globals.annualDiscountRate= this.annualDiscountRate,
    this.globals.leaseTerm= this.leaseTerm,
    this.globals.expectedPeriod= this.expectedPeriod,
    this.globals.leasePayment= this.leasePayment,
    this.globals.paymentIntervals= this.paymentIntervals,
    this.globals.initialDirectCost= this.initialDirectCost,
    this.globals.guaranteedResidualValue= this.guaranteedResidualValue,
    this.globals.usefulLifeOfTheAsset= this.usefulLifeOfTheAsset,
    this.globals.escalation= this.escalation,
    this.globals. escalationAfterEvery= this.escalationAfterEvery


   // alert("calculation for " + this.globals.userName)
    this.Firsttimeadoptionreportingperiodservice.calculate(data).then(response => {
      this.map = new Map(Object.entries(response.data));
  console.log(response.data)
      this.map1 = this.map.get("17");
      this.presentValue = this.map1[9];
      alert(this.presentValue)
      this.globals.presentValue = this.presentValue
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
  saveData(){
    alert(this.userId)
    var data = {
      userId: this.userId,
      leaseContractNo: this.leaseContractNo,
      classAsset: this.classAsset,
      commencementDate: this.commencementDate,
      paymentsAt: this.paymentsAt,
      annualDiscountRate: this.annualDiscountRate,
      leaseTerm: this.leaseTerm,
      expectedPeriod: this.expectedPeriod,
      leasePayment: this.leasePayment,
      paymentIntervals: this.paymentIntervals,
      initialDirectCost: this.initialDirectCost,
      guaranteedResidualValue: this.guaranteedResidualValue,
      usefulLifeOfTheAsset: this.usefulLifeOfTheAsset,
      escalation: this.escalation,
      escalationAfterEvery: this.escalationAfterEvery,
      // contractCurrency:this.contractCurrency,
      // answer1:this.answer1,
      // answer2:this.answer2,
      // answer3:this.answer3,
      // answer4:this.answer4,
      // answer5:this.answer5,
      // answer6new:this.answer6new,
      // answer7:this.answer7
    };
    this.globals.leaseContractNo= this.leaseContractNo,
    this.globals.classAsset= this.classAsset,
    this.globals.commencementDate= this.commencementDate,
    this.globals.paymentsAt= this.paymentsAt,
    this.globals.annualDiscountRate= this.annualDiscountRate,
    this.globals.leaseTerm= this.leaseTerm,
    this.globals.expectedPeriod= this.expectedPeriod,
    this.globals.leasePayment= this.leasePayment,
    this.globals.paymentIntervals= this.paymentIntervals,
    this.globals.initialDirectCost= this.initialDirectCost,
    this.globals.guaranteedResidualValue= this.guaranteedResidualValue,
    this.globals.usefulLifeOfTheAsset= this.usefulLifeOfTheAsset,
    this.globals.escalation= this.escalation,
    this.globals. escalationAfterEvery= this.escalationAfterEvery

    console.log(JSON.stringify(data))
    this.Firsttimeadoptionreportingperiodservice.SaveData(data).then(response => {
    
      alert(response.data)
      
    
   });
  }

  ngOnInit() {
   
    

  }
 
  
  closeAlert() {
  this.isLoggedIn = true
  }
}


