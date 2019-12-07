import { Component, OnInit } from "@angular/core";
import { Firsttimeadoptionreportingperiodservice } from "./firsttimeadoptionreportingperiod.componentservice";import { Globals } from "../globals";
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
  constructor(public firsttimeadoptionreportingperiodservice: Firsttimeadoptionreportingperiodservice, public globals: Globals, private router: Router, public authService: AuthService) { }
  returnUrl: string;

  ContractReferenceNumber = "";
  LeaseCommencementDate = "";
  ClassOfAsset = "";
  LeaseName = "";
  LessorName = "";
  Location = "";
  OtherCondition = "";


  CommencementDate = "";
  PaymentIn = "";
  AnnualDiscountRate = "";
  validationCustom04 = "";
  LeaseTermPeriod = "";
  ExpectedUsagePeriod = "";
  LeasePayment = "";
  PaymentInterval = "";
  GuaranteedResidualValue = "";
  LifeOfTheAsset = "";
  InitialDirectCost = "";
  Escalation = "";
  EscalationAfterEvery = "";
  ContractCurrency = "";


  formdata() {
    var data = {
  ContractReferenceNumber :this.ContractReferenceNumber,
  LeaseCommencementDate : this.LeaseCommencementDate,
  ClassOfAsset : this.ClassOfAsset,
  LeaseName : this.LeaseName,
  LessorName :this.LessorName,
  Location : this.Location,
  OtherCondition :this.OtherCondition,

  CommencementDate:this.CommencementDate,
  PaymentIn :this.PaymentIn,
  AnnualDiscountRate :this.AnnualDiscountRate,
  LeaseTermPeriod :this.LeaseTermPeriod,
  ExpectedUsagePeriod:this.ExpectedUsagePeriod, 
  LeasePayment:this.LeasePayment, 
  PaymentInterval:this.PaymentInterval, 
  GuaranteedResidualValue:this.GuaranteedResidualValue, 
  LifeOfTheAsset :this.LifeOfTheAsset,
  InitialDirectCost:this.InitialDirectCost, 
  Escalation :this.Escalation,
  EscalationAfterEvery:this.EscalationAfterEvery, 
  ContractCurrency :this.ContractCurrency
    
  };
  this.firsttimeadoptionreportingperiodservice.formdata(data).then(response => {
    

     
  });

  }

  

  ngOnInit() {
   
    

  }
 
  
  closeAlert() {
  this.isLoggedIn = true
  }
}


