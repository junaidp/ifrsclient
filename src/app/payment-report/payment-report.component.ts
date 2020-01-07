import { Component, OnInit } from '@angular/core';
import { Globals } from "../globals";
import { paymentService } from "./paymentService";
import { ThrowStmt } from '@angular/compiler';
import { JsonPipe } from '@angular/common';
declare var $: any;
@Component({
  selector: 'app-payment-report',
  templateUrl: './payment-report.component.html',
  styleUrls: ['./payment-report.component.css']
})
export class PaymentReportComponent implements OnInit {

  constructor(public paymentService: paymentService, public globals: Globals) { }
  // leaseContractNo = "";
  // serial="";
  // RefNo="";
  // leasename="lasgd";
  // lessorname="";
  // classofasset=""; 
  // vendorname="";
  // location="";
  // paymentdate="";
  // payment="";
  // actor_name: 'this.leasename';
  // paymentService(){
  //   actor_name: this.leasename
  // }
  // characters: paymentService[] = [
    
  //   {
  //   actor_name: this.leasename,
  //   character_name: 'Tyrion Lannister',
  //   gender: 'Male',
  //       status: 'Alive'
  //   },
  //   {
  //   actor_name: 'Sean Bean',
  //   character_name: 'Ned Stark',
  //   gender: 'Male',
  //   status: 'Dead'
  //   },
  //   {
  //   actor_name: 'Emilia Clark',
  //   character_name: 'Khaleesi',
  //   gender: 'Female',
  //   status: 'Alive'
  //   },
  //   {
  //   actor_name: 'Catelyn Stark',
  //   character_name: 'Michelle Fairley',
  //   gender: 'Female',
  //   status: 'Dead'
  //   }
  // ];
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
    
    this.paymentService.calculate(data).then(response => {
      this.map = new Map(Object.entries(response.data));
      
      console.log(response.data);
      this.map1 = this.map.get("17");
      this.presentValue = this.map1[9];
      this.globals.presentValue = this.presentValue
    });
  }
  private setGlobals() {
  
  }

  ngOnInit() {
    this.value();
  }

}
