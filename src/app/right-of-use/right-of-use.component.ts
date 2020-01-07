import { Component, OnInit } from '@angular/core';
import { Globals } from "../globals";
import { rightService } from "./rightService";
import { ThrowStmt } from '@angular/compiler';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-right-of-use',
  templateUrl: './right-of-use.component.html',
  styleUrls: ['./right-of-use.component.css']
})
export class RightOfUseComponent implements OnInit {

  constructor(public rightService: rightService, public globals: Globals) { }
  map1: Map<String, String>;
  presentValue: number;
  //first tab
  leaseContractNo = "";
  classAsset = "";
  commencementDate ="2019-03-11";
  leaseName = "nill";
  lessorName = "nill ";
  leasseeName = "";
  location = "";
  otherCondition = "";
  vendername = "";

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
  Rightofuseofasset = "";
  map: Map<string, Map<string, string>>;

  userId = "1133"
  
  value(){
    var data = {
   
      leaseContractNo: this.leaseContractNo,
      leaseName: this.leaseName,
      lessorname: this.lessorName,
      classAsset: this.classAsset,
      vendorname: this.vendername,
      location: this.location,
      commencementDate: this.commencementDate,
      paymentsAt: this.paymentsAt,
      Rightofuseofasset: this.Rightofuseofasset,
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
    
    this.rightService.calculate(data).then(response => {
      this.map = new Map(Object.entries(response.data));
      console.log(response.data);
      this.map1 = this.map.get("17");
      this.presentValue = this.map1[9];
      this.globals.presentValue = this.presentValue
    });
  }

  ngOnInit() {
    this.value();
  }

}
