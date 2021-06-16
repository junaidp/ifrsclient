import { Component, OnInit } from '@angular/core';
import { Globals } from "../globals";
import { JournalService } from "./journalService";
import { ThrowStmt } from '@angular/compiler';
import { JsonPipe } from '@angular/common';
import {ChangeDetectorRef} from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
import { DisplayError } from "../displayError";

import {
  Router,
  NavigationExtras
} from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-derecognitionJounrnalentries',
  templateUrl: './derecognitionJounrnalentries.component.html',
  styleUrls: ['./derecognitionJounrnalentries.component.css']
})
export class DerecognitionJounrnalentriesComponent implements OnInit {

  mapDeRecognition: Map<String, String>;
  userSelectedDate: Date;
  recognitionOptions = ""
  paymentToAdd = ""
  dataIdDec = "";

  finalPrepaidExpenseBool: any
  finalAccruedLiabilityBool: any
  paymentCashBankBool: any
  finalLeaseLiabilityBool: any
  finalBankCrBool : any
  finalFinanceCostBool: any

  //termination
  finalExpenseTerBool : any
  finalLLTerBool : any
  finalROUTerBool : any
  finalGainTerBool : any
  finalBankTerBool : any
  // ending issue payment div is not showing
  constructor(public journalService: JournalService , public displayError: DisplayError,  private router: Router, public globals: Globals , private cd : ChangeDetectorRef,  private spinner: NgxSpinnerService) {

    var id = this.router.getCurrentNavigation().extras.state.dataId;
    this.dataIdDec = id;
  }


  finalPrepaidExpense: any
  finalAccruedLiability: any
  paymentCashBank: any
  finalLeaseLiability: any
  finalBankCr : any
  finalFinanceCost: any
  finalDate: any;

  //termination
  finalExpenseTer : any
  finalLLTer : any
  finalROUTer : any
  finalGainTer : any
  finalBankTer : any

  userId: any
  companyId: any


  map: Map<string, Map<string, string>>;
  map1: Map<String, String>;
  //for dr

  calculateDerecognition(){
    this.spinner.show();
    this.userId = localStorage.getItem('userId');
    this.companyId = localStorage.getItem('companyId');

    if(this.userId === "undefined"){
      this.userId = 0;
    }
    var data = {
      userId: this.userId,
      companyId: this.companyId,
      userSelectedDate: this.userSelectedDate,
      paymentToAdd: this.paymentToAdd,
      recognitionOptions:this.recognitionOptions,
      dataId: this.dataIdDec

    };
    this.journalService.calculateDepreciation(data).then(response => {
      this.spinner.hide();
      //this.mapDeRecognition = new Map(Object(response.data));
      console.log(response);
      this.finalAccruedLiability = response.data.AccruedDr;
      this.finalFinanceCost = response.data.financeCostDr
      this.finalLeaseLiability = response.data.LeaseLiabilityDr
      this.finalBankCr = response.data.BankCr
      //termination

      this.finalExpenseTer = response.data.expenseTermination
      this.finalLLTer = response.data.llTermination 
      this.finalROUTer = response.data.rouTermination
      this.finalGainTer = response.data.gainTermination 
      this.finalBankTer = response.data.bankTermination 

      this.finalPrepaidExpense = response.data.prepaid

      this.setBooleanForVisibility();
      
   
    },
      (error): void => {
        //Error callback
        this.spinner.hide();
        this.displayError.displayErrorMessage(error);

      }
    );

  }

  private setBooleanForVisibility() {
    if (this.finalAccruedLiability < 0) {
      this.finalAccruedLiability = -(this.finalAccruedLiability);
      this.finalAccruedLiabilityBool = false;
    }
    else {
      this.finalAccruedLiabilityBool = true;
    }
    if (this.finalFinanceCost < 0) {
      this.finalFinanceCost = -(this.finalFinanceCost);
      this.finalFinanceCostBool = false;
    }
    else {
      this.finalFinanceCostBool = true;
    }

    if (this.finalPrepaidExpense < 0) {
      this.finalPrepaidExpense = -(this.finalPrepaidExpense);
      this.finalPrepaidExpenseBool = false;
    }
    else {
      this.finalPrepaidExpenseBool = true;
    }

    if (this.finalLeaseLiability < 0) {
      this.finalLeaseLiability = -(this.finalLeaseLiability);
      this.finalLeaseLiabilityBool = false;
    }
    else {
      this.finalLeaseLiabilityBool = true;
    }
    if (this.finalBankCr < 0) {
      this.finalBankCr = -(this.finalBankCr);
      this.finalBankCrBool = false;
    }
    else {
      this.finalBankCrBool = true;
    }

    // for termination
    if (this.finalExpenseTer < 0) {
      this.finalExpenseTer = -(this.finalExpenseTer);
      this.finalExpenseTerBool = false;
    }
    else {
      this.finalExpenseTerBool = true;
    }
    if (this.finalLLTer < 0) {
      this.finalLLTer = -(this.finalLLTer);
      this.finalLLTerBool = false;
    }
    else {
      this.finalLLTerBool = true;
    }
    if (this.finalROUTer < 0) {
      this.finalROUTer = -(this.finalROUTer);
      this.finalROUTerBool = false;
    }
    else {
      this.finalROUTerBool = true;
    }

    if (this.finalGainTer < 0) {
      this.finalGainTer = -(this.finalGainTer);
      this.finalGainTerBool = false;
    }
    else {
      this.finalGainTerBool = true;
    }

    if (this.finalBankTer < 0) {
      this.finalBankTer = -(this.finalBankTer);
      this.finalBankTerBool = false;
    }
    else {
      this.finalBankTerBool = true;
    }
  }

  ngOnInit() {
    $('#paymentMonthBeginningDiv').show();
    $('#beginningView').show();
    $('#endingView').show();
    $('#paymentMonthEndingDiv').show();
    $('#overlaylogin').hide();
    (function() {
        var myDiv = document.getElementById("overlaylogin"),

            showww = function() {
                myDiv.style.display = "block";
                setTimeout(hide, 2000); // 5 seconds
            },

            hide = function() {
                myDiv.style.display = "none";
            };

        showww();
    })();
    var modal = document.getElementById("myModall");
    var btn = document.getElementById("myBtnn");
    var span = document.getElementsByClassName("close")[0];
    btn.onclick = function() {
      modal.style.display = "block";
    }
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
  }
}
