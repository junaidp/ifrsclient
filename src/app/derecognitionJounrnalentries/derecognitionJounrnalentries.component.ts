import { Component, OnInit } from '@angular/core';
import { Globals } from "../globals";
import { JournalService } from "./journalService";
import { ThrowStmt } from '@angular/compiler';
import { JsonPipe } from '@angular/common';
import {ChangeDetectorRef} from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
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


  paymentBool = true;
  accruedBool = true;
  prepaidBool = true;
  leaseBool = true;

  financeBool = true;


  dataIdDec = "";
  // ending issue payment div is not showing
  constructor(public journalService: JournalService, private router: Router, public globals: Globals , private cd : ChangeDetectorRef,  private spinner: NgxSpinnerService) {

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

  leaseLiabilityEnding: any
  leaseLiabilityBeginning: any
  userId: any
  companyId: any
  commencementDateService: Date
  dateSelectorMonth: any

  monthTotal: number
  repeatMonth: number
  drValue: any
  accruedLiabilityMonthly: number
  totalOfMonth: any
  repeatedMonthValue: any
  repeatedMonthAccrued: any
  financeCost: any
  year: Date;
  month: Date;
  map: Map<string, Map<string, string>>;
  map1: Map<String, String>;
  //for dr

  aboveColj: any
  fullDate: ""
  ServiceDrValue = 0;


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
  
   
    });

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
