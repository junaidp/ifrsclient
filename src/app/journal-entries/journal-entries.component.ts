import { Component, OnInit } from '@angular/core';
import { Globals } from "../globals";
import { JournalService } from "./journalService";
import { ThrowStmt } from '@angular/compiler';
import { JsonPipe } from '@angular/common';
declare var $: any;

@Component({
  selector: 'app-journal-entries',
  templateUrl: './journal-entries.component.html',
  styleUrls: ['./journal-entries.component.css']
})

export class JournalEntriesComponent implements OnInit {

  constructor(public journalService: JournalService, public globals: Globals) {

  }
  dateSelectorMonth:any
  paymentCashBank: any
  monthTotal: number
  repeatMonth: number

  leaseLiabilityEnding: number
  leaseLiabilityBeginning: number

  totalOfMonth: any
  repeatedMonthValue: any
  financeCost: any
  year: Date;
  month: Date;

  map: Map<string, Map<string, string>>;
  map1: Map<String, String>;
  //for dr
  drValue: any;
 paymentInterval = "";
  fullDate: ""

  calculate() {
    
    // alert($('#dateSelector').val());
    var ret = ($('#dateSelector').val().split("-"))
    var day = 10
    var year = ret[0];
    var month = ret[1];
    this.dateSelectorMonth = month
    var data = {

      year: year,
      month: month,
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

      console.log(response.data)
      
      this.map = new Map(Object.entries(response.data));
      // settign valuesfrom api call srive 
      this.drValue = this.map.get('dr')
      this.totalOfMonth = this.map.get('total')
      this.repeatedMonthValue = this.map.get('repeat');
      this.financeCost = this.map.get('financeCharge');

      // check to check whether its ending selected and month is equals to payment month then subtract repeated moth from dr value
      var paymentEnding = "Ending" 
      var payment = this.map.get('payment');
      var paymentInGlobal =this.globals.paymentsAt
      var commencementDateG = (this.globals.commencementDate.split("-"))
      var comencementMonth = commencementDateG[1];
      if ((comencementMonth == month) &&(paymentInGlobal.toLowerCase==paymentEnding.toLowerCase)) {
        this.drValue = this.drValue - this.repeatMonth
      }

      this.paymentCashBank = payment
      this.monthTotal = parseInt(this.totalOfMonth, 10);
      this.repeatMonth = parseInt(this.repeatedMonthValue, 10);
      //calculatiung leaseliability for ending
      this.leaseLiabilityEnding = this.paymentCashBank - this.monthTotal - this.repeatMonth
      //calculatiung leaseliability for Beginning
      this.leaseLiabilityBeginning = this.paymentCashBank - this.financeCost
    });

  }


  ngOnInit() {

    var commencementDateOld = (this.globals.commencementDate.split("-"))
    var comencementMonth = commencementDateOld[1];
    var year = commencementDateOld[2];
    this.paymentInterval = this.globals.paymentIntervals

    // at startup hiding all the divs ..
    $('#endingView').hide();
    $('#beginningView').hide();
    $('#paymentMonthDiv').hide();
    $('#paymentMonthBeginningDiv').hide();
    
    var paymentIn =this.globals.paymentsAt
    var paymentBeginning = "Beginning"
    var paymentEnding = "Ending"
    
    // for showing user selected beginning or ending view shown accordingly
    if (paymentIn.toLowerCase() == paymentEnding.toLowerCase()) {
      $('#endingView').show();
    }
    if (paymentIn.toLowerCase() == paymentBeginning.toLowerCase()) {
      $('#beginningView').show();
    }

   // dateSelector change event

    $('#dateSelector').on('change', function () {
  
      //getting and spi;itting the date fromdate Selector
      var ret = ($('#dateSelector').val().split("-"))
      var day = 10
      var year = ret[0];
      var month = ret[1];
// check if payment month equals tyo commencement month then show payemnt divs
      if (comencementMonth== month) {
        
        $('#paymentMonthDiv').show();
      
        $('#paymentMonthBeginningDiv').show();
      }
      else {
        $('#paymentMonthBeginningDiv').hide();
        $('#paymentMonthDiv').hide();
      }
      //    this.fullDate = day + "/" + month + "/" + year

    });

    $("#journal_entry_show").on("click", function () {
      $("#journal_entry").toggle("show");
      $("#journal_entry1").toggle("show");
    });

  }


}
