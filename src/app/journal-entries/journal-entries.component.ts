import { Component, OnInit } from '@angular/core';
import { Globals } from "../globals";
import { JournalService } from "./journalService";
import { ThrowStmt } from '@angular/compiler';
declare var $: any;

@Component({
  selector: 'app-journal-entries',
  templateUrl: './journal-entries.component.html',
  styleUrls: ['./journal-entries.component.css']
})

export class JournalEntriesComponent implements OnInit {

  constructor(public journalService: JournalService, public globals: Globals) {

  }
  presentValue: number
  monthTotal: number
  repeatMonth: number

  leaseLiability: number

  totalOfMonth: any
  repeatedMonthValue: any
  year: Date;
  month: Date;

  map: Map<string, Map<string, string>>;
  map1: Map<String, String>;
  //for dr
  drValue: any;
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



  splitDate: string;
  fullDate: ""

  calculate() {
    this.presentValue = this.globals.presentValue
    // alert($('#dateSelector').val());
    var ret = ($('#dateSelector').val().split("-"))
    var day = 10
    var year = ret[0];
    var month = ret[1];
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
      this.map = new Map(Object.entries(response.data));
      this.drValue = this.map.get('dr')
      this.totalOfMonth = this.map.get('total')
      this.repeatedMonthValue = this.map.get('repeat');

      this.monthTotal = parseInt(this.totalOfMonth, 10);
      this.repeatMonth = parseInt(this.repeatedMonthValue, 10);

      this.leaseLiability = this.presentValue - this.monthTotal - this.repeatMonth

    });

  }


  ngOnInit() {
    $('#paymentMonthDiv').hide();
    var commencementDateOld = (this.globals.commencementDate.split("-"))
    var comencementMonth = commencementDateOld[1];
    var year = commencementDateOld[2];

    $('#dateSelector').on('change', function () {
      //    alert($('#dateSelector').val());
      var ret = ($('#dateSelector').val().split("-"))
      var day = 10
      var year = ret[0];
      var month = ret[1];
      if (comencementMonth == month) {

        $('#paymentMonthDiv').show();
      }
      else {

        $('#paymentMonthDiv').hide();
      }
      this.fullDate = day + "/" + month + "/" + year

    });

    $("#journal_entry_show").on("click", function () {
      $("#journal_entry").toggle("show");
      $("#journal_entry1").toggle("show");
    });

  }


}
