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
      //this.mapDeRecognition = new Map(Object(response.data));
      alert(response.data.BankCr)
      this.finalAccruedLiability = response.data.AccruedDr;
      this.finalFinanceCost = response.data.financeCostDr
      this.finalLeaseLiability = response.data.LeaseLiabilityDr
      this.finalBankCr = response.data.BankCr
      // alert(response.data.financeCostDr)
      // alert(response.data.AccruedDr)
      // alert(response.data.LeaseLiabilityDr)
      // 

      //alert(this.mapDeRecognition.get("financeCostDr") + "sadas");
      console.log(response);
    });

  }
  // calculate() {
  //   // $('#paymentMonthBeginningDiv').show();
  //   // $('#beginningView').show();
  //   this.userId = localStorage.getItem('userId');
  //   this.companyId = localStorage.getItem('companyId');

  //   if(this.userId === "undefined"){
  //     this.userId = 0;
  //   }
  //   var ret = ($('#dateSelector').val().split("-"));
  //   var day = 10
  //   var year = ret[0];
  //   var month = ret[1];

  // //getting last day of month
  //   var lastDay = new Date(year, month , 0);
  //   this.finalDate =  (lastDay.getDate() +"-" +month + "-" + year)
  //   this.dateSelectorMonth = month
  //   var data = {
  //     userId: this.userId,
  //     companyId: this.companyId,
  //     year: year,
  //     month: month
  //   };
  //   //alert(JSON.stringify(data))
  //   this.spinner.show();
 
  //   this.journalService.calculate(data).then(response => {
     
  //  //   hide();
  //     this.spinner.hide();
  //     console.log(response.data)
  //     var sumOfPrepaidExpense = 0
  //     var sumOfAccruedLiability = 0
  //     var sumOfAccruedLiabilityCr = 0
  //     var sumOfLeaseLiability = 0
  //     var sumOffinanceCostDr = 0;
  //     var sumOfPrepaidExpenseCr = 0;
  //     var sumOfpaymentCashBank = 0

  //     var sumOfleaseLiabilityEnding = 0
  //     var sumOfleaseLiabilityBeginning = 0
  //     var sumOftotalOfMonth = 0
  //     var sumOfrepeatedMonthValue = 0
  //     var sumOffinanceCost = 0
  //     var sumOffinanceCostCr = 0
  //     var paymentInGlobal
  //     var commencementDateSer
  //     var paymentIntervalsService
  //     var commencementDateService
  //     var monthService
  //     var payment
  //     var dayService
  //     var yearService
  //     var commencementDateS

  //     var financeCostPrepaidExpence
  //     var crValuePrepaidExpence
  //     var crValueAccrued
  //     var totalOfMonthAccrued
  //     var leaseLiabilityEnding
  //     var leaseLiabilityBeginning
  //     var drValueFinanceCost
  //     var dateService



  //     $.each(response.data, function (index) {

  //       // setting all the values to null in startup
  //       this.repeatedMonthValue = 0
  //       drValueFinanceCost = 0
  //       totalOfMonthAccrued = 0
  //       financeCostPrepaidExpence =0
  //       this.financeCost = 0
  //       leaseLiabilityEnding = 0
  //       leaseLiabilityBeginning = 0
  //       this.repeatMonth = 0
  //       this.repeatedMonthAccrued = 0
  //       this.ServiceDrValue = 0
  //       var paymentEnding = "Ending"
  //       var paymentBeginning = "Beginning"

  //       this.map = new Map(Object.entries(response.data[index]));
  //       paymentInGlobal = response.data[index].paymentsAt;
  //       commencementDateSer = (response.data[index].commencementDate)
  //       paymentIntervalsService = response.data[index].paymentIntervals;
  //       commencementDateService = (commencementDateSer.split(" "))
  //       monthService = commencementDateService[1]
  //       dayService = commencementDateService[2]
  //       yearService = commencementDateService[5]

  //       // settign valuesfrom api call srive 
  //       drValueFinanceCost = this.map.get('dr')
  //        // sum of g,h,i
  //       this.repeatedMonthAccrued = this.map.get('RepeatmonthAccrued');
  //       this.commencementDateS = this.map.get('commencementDate');
  //       // for rounding off upto 0 dc
  //       drValueFinanceCost = Math.round(drValueFinanceCost)
        
  //       this.repeatedMonthAccrued = Math.round(this.repeatedMonthAccrued)
  //       const monthServiceInt = calculateMonth(monthService);
  //       // check to check whether its ending selected and month is equals to payment month then subtract repeated moth from dr value
  //       payment = this.map.get('payment');
  //      if (typeof payment == "undefined"|| typeof payment == null){
  //           payment = 0
  //       }
        
  //       if(payment>=0){
  //       this.paymentCashBank = payment
  //       }
  //       if (paymentIntervalsService.toLowerCase() == "quarterly") {
  //         this.startDate = this.map.get('startDate')
  //         if (typeof this.startDate != "undefined" && typeof this.startDate != null){
  //           var paymentDate = this.startDate.split("-")
  //           var paymentYear = paymentDate[0];
  //           var paymentMonth = paymentDate[1];
  //         }
  //         var ret = ($('#dateSelector').val().split("-"))
  //         var day = 10
  //         var year = ret[0];
  //         var userSelectedMonth = ret[1];
  //       }


  //       if (paymentInGlobal.toLowerCase() == paymentBeginning.toLowerCase()) {

  //         this.financeCost = this.map.get('financeCharge');
  //         this.financeCost = Math.round(this.financeCost)
  //         crValuePrepaidExpence = this.map.get('dr')
  //         financeCostPrepaidExpence = this.map.get('financeCharge');


  //         if ((paymentIntervalsService.toLowerCase() == "quarterly")) {

  //             //begining
  //             drValueFinanceCost = this.map.get('dr')
  //             crValuePrepaidExpence = this.map.get('dr')
  //             this.financeCost = this.map.get('financeCharge');
  //             financeCostPrepaidExpence = this.map.get('financeCharge');
  //             payment = this.map.get('payment');

  //             //for round to 0 dc
  //             drValueFinanceCost = Math.round(drValueFinanceCost)
  //             crValuePrepaidExpence = Math.round(crValuePrepaidExpence)
  //             this.financeCost = Math.round(this.financeCost)
  //             financeCostPrepaidExpence = Math.round(financeCostPrepaidExpence)
  //             if(payment>=0){
  //               this.paymentCashBank = payment
  //             }
  //             leaseLiabilityBeginning = Math.round(this.paymentCashBank - this.financeCost)
  //           }


  //         crValuePrepaidExpence = Math.round(crValuePrepaidExpence)
  //         //alert(this.paymentCashBank  +   "fc "   + this.financeCost)
  //         leaseLiabilityBeginning = Math.round(this.paymentCashBank - this.financeCost)
  //        // if(leaseLiabilityBeginning > 0){
          
  //        // if(isNaN(leaseLiabilityBeginning) ===true){
  //        //   leaseLiabilityBeginning = 0
  //       //  }
  //       //  alert(leaseLiabilityBeginning)
  //         if(crValuePrepaidExpence > 0){

  //          sumOfPrepaidExpenseCr += parseInt(crValuePrepaidExpence)
  //         }
  //       }

  //       if (paymentInGlobal.toLowerCase() == paymentEnding.toLowerCase()) {
      
  //         totalOfMonthAccrued = this.map.get('total')
  //         crValueAccrued = this.map.get('dr')
  //         totalOfMonthAccrued = Math.round(totalOfMonthAccrued)
  //         if ((monthServiceInt == month) && (paymentIntervalsService.toLowerCase() == "yearly")) {

  //           this.repeatedMonthValue = this.map.get('repeat'); // column j
  //           this.repeatedMonthValue = Math.round(this.repeatedMonthValue)
  //           crValueAccrued = this.map.get('dr')
  //           crValueAccrued = Math.round(crValueAccrued)
  //           drValueFinanceCost = Math.round(drValueFinanceCost - this.repeatedMonthValue)
  //           crValueAccrued = Math.round(crValueAccrued - this.repeatedMonthValue)
  //           //calculationg accrued liability for ending yearly
  //           totalOfMonthAccrued = Math.round(totalOfMonthAccrued - this.repeatedMonthAccrued) //it should be repatMonthAccrued
  //           this.leaseLiabilityEnding = Math.round(this.paymentCashBank - totalOfMonthAccrued - this.repeatedMonthValue)
         
  //         }

  //         if ((paymentIntervalsService.toLowerCase() == "monthly")) {
           
  //           totalOfMonthAccrued = this.map.get('accuredLiabality')
  //           this.repeatedMonthValue = this.map.get('financeCostRemaining')
  //           this.repeatedMonthValue = Math.round(this.repeatedMonthValue)
  //           this.repeatedMonthAccrued = Math.round(this.repeatedMonthAccrued)
  //           totalOfMonthAccrued = Math.round(totalOfMonthAccrued)
  //           this.leaseLiabilityEnding = Math.round(this.paymentCashBank - totalOfMonthAccrued - this.repeatedMonthValue)
  //          if(leaseLiabilityEnding > 0){
  //          // if(isNaN(leaseLiabilityEnding) ===true){
  //             leaseLiabilityEnding = 0
  //           }


  //         }

  //         if ((paymentIntervalsService.toLowerCase() == "quarterly")) {
  //           totalOfMonthAccrued = 0;
  //           //ending
  //           drValueFinanceCost = this.map.get('dr')
  //           //alert(drValueFinanceCost + "line22`1")
  //           crValueAccrued = this.map.get('dr')
  //        //   this.repeatedMonthValue = this.map.get('repeat')
  //           this.aboveColj = this.map.get('aboveColJ')
  //           this.paymentCashBank = this.map.get('payment')
            
  //           this.repeatedMonthAccrued = this.map.get('repeatmonthAccrued');
  //           //for rounding to 0
  //           drValueFinanceCost = Math.round(drValueFinanceCost)
  //           crValueAccrued = Math.round(crValueAccrued)
  //           this.aboveColj = Math.round(this.aboveColj)
  //           this.paymentCashBank = Math.round(this.paymentCashBank)
           
  //           this.repeatedMonthAccrued = Math.round(this.repeatedMonthAccrued)
  //           //for every quarter start month dr should be subtracted from 1 value above the J column

  //           //to avoid nan values

  //           if (this.aboveColj == "" || this.aboveColj == "undefined") {
  //             this.aboveColj = 0
  //           }
  //           if (totalOfMonthAccrued == "" || totalOfMonthAccrued == "undefined") {
  //             totalOfMonthAccrued = 0;

  //           }
  //           if (userSelectedMonth == paymentMonth) {
  //             totalOfMonthAccrued = this.map.get('total')
  //             totalOfMonthAccrued = Math.round(totalOfMonthAccrued)
  //             this.repeatedMonthValue = this.map.get('aboveColJ')
  //             drValueFinanceCost = Math.round(drValueFinanceCost - this.aboveColj)
  //             totalOfMonthAccrued = Math.round(totalOfMonthAccrued - this.repeatedMonthAccrued)
  //             crValueAccrued = Math.round(crValueAccrued - this.aboveColj)
  //           }
  //           //  total(accruedliability payment month should be subtracted from coluumn j 1 value above)
            
  //           this.monthTotal = parseInt(totalOfMonthAccrued, 10);
  //           this.repeatMonth = parseInt(this.repeatedMonthValue, 10);
  //           this.leaseLiabilityEnding = Math.round(this.paymentCashBank - this.monthTotal - this.repeatMonth)
            
  //          // sumOfPrepaidExpense = 0;
  //         }
  //         crValueAccrued = Math.round(crValueAccrued)
  //         if (crValueAccrued > 0) {
  //         sumOfAccruedLiabilityCr += parseInt(crValueAccrued)
  //         }
  //       }
  //       if(drValueFinanceCost > 0){
  //       sumOffinanceCostDr += parseInt(drValueFinanceCost)
  //       }
  //       //  if (paymentInGlobal.toLowerCase() == paymentBeginning.toLowerCase() && (month == monthServiceInt) || (paymentIntervalsService.toLowerCase() == "monthly") || (paymentIntervalsService.toLowerCase() == "quarterly")) {
  //       if ((month == monthServiceInt) || (paymentIntervalsService.toLowerCase() == "monthly") || (paymentIntervalsService.toLowerCase() == "quarterly")) {
  //         sumOfpaymentCashBank += parseFloat(this.paymentCashBank)
  //         sumOfpaymentCashBank = Math.round(sumOfpaymentCashBank)
  //         if (this.leaseLiabilityEnding > 0) {
  //         sumOfleaseLiabilityEnding += parseInt(this.leaseLiabilityEnding)
  //         }
         
  //         // if(isNaN(sumOfleaseLiabilityEnding) ===true){
  //         //   sumOfleaseLiabilityEnding = 0
  //         // }
  //         // removed due to error identified by hassan in yearly begiining entry 21-01-2021
  //         if (leaseLiabilityBeginning > 0) {
  //         sumOfleaseLiabilityBeginning += parseInt(leaseLiabilityBeginning)
  //         }
  //         sumOftotalOfMonth += parseInt(totalOfMonthAccrued)
  //         if(this.repeatedMonthValue > 0){
  //         sumOfrepeatedMonthValue += parseInt(this.repeatedMonthValue)
  //       }
  //       if(this.financeCost > 0){
  //         sumOffinanceCost += parseInt(this.financeCost)
  //       }
  //       if(this.financeCost > 0){
  //         sumOffinanceCostCr += parseInt(this.financeCost)
  //       }
  //         if (totalOfMonthAccrued > 0) {
  //           sumOfAccruedLiability += parseInt(totalOfMonthAccrued)
  //         }
  //         financeCostPrepaidExpence = Math.round(financeCostPrepaidExpence)
  //         if (financeCostPrepaidExpence > 0) {
  //           sumOfPrepaidExpense += parseInt(financeCostPrepaidExpence)
  //         }
  //         sumOfLeaseLiability += parseInt(leaseLiabilityBeginning + leaseLiabilityEnding + "line 369")
  //       }
  //     });
  //     this.leaseLiabilityEnding = sumOfleaseLiabilityEnding
  //     this.leaseLiabilityBeginning = sumOfleaseLiabilityBeginning
  //     this.totalOfMonth = sumOftotalOfMonth
  //     this.finalAccruedLiability = sumOftotalOfMonth

  //     this.repeatedMonthValue = sumOfrepeatedMonthValue
  //     this.financeCost = sumOffinanceCost
  //     this.drValue = sumOffinanceCostDr
  //     var sumOfAccruedLiabilityFinal = sumOfAccruedLiability - sumOfAccruedLiabilityCr
  //   //  alert(sumOfPrepaidExpense + "sumofprepaid"   +  sumOfPrepaidExpenseCr + "sumofprepaidcr")
  //     var sumOfPrepaidExpenceFinal = sumOfPrepaidExpense - sumOfPrepaidExpenseCr
  //   //  alert(sumOffinanceCost + "sfc" + sumOffinanceCostDr + "sfcDr" + sumOffinanceCostCr + "sfcr" + sumOfrepeatedMonthValue + "srpmnt")
  //     var sumOfFinanceCostFinal = sumOffinanceCost + sumOffinanceCostDr + sumOfrepeatedMonthValue + (-sumOffinanceCostCr)
  //     // newly added

  //   //  alert(sumOfpaymentCashBank + "paymetnt "  + sumOffinanceCost + "sumoffc" + sumOfAccruedLiability + "sumofaccrued" + sumOfPrepaidExpenceFinal + "ssumofprepaid" + leaseLiabilityBeginning + "sumofleasebeg" + leaseLiabilityEnding + "leaseending")
  //     this.paymentCashBank = sumOfpaymentCashBank
  //     this.finalFinanceCost = sumOfFinanceCostFinal
  //     this.finalAccruedLiability = sumOfAccruedLiabilityFinal
  //     this.FinalPrepaidExpense = sumOfPrepaidExpenceFinal
  //     this.finalLeaseLiability = sumOfleaseLiabilityEnding+sumOfleaseLiabilityBeginning



  //     if(this.paymentCashBank < 0) {
  //       this.paymentCashBank = -(this.paymentCashBank)
  //       this.paymentBool = false;
  //     }
  //     else{
  //       this.paymentBool = true;
  //     }
  //     if(this.finalFinanceCost < 0) {
  //       this.finalFinanceCost = -(this.finalFinanceCost)
  //       this.financeBool = false;
  //     }
  //     else{
  //       this.financeBool = true;
  //     }
  //     if(this.finalAccruedLiability < 0) {
  //       this.finalAccruedLiability = -(this.finalAccruedLiability)
  //       this.accruedBool = false;
  //     }
  //     else{
  //       this.accruedBool = true;
  //     }
  //     if(this.FinalPrepaidExpense < 0) {
  //       this.FinalPrepaidExpense = -(this.FinalPrepaidExpense)
  //       this.prepaidBool = false;
  //     }
  //     else{
  //       this.prepaidBool = true;
  //     }
  //     if(this.finalLeaseLiability < 0) {
  //       this.finalLeaseLiability = -(this.finalLeaseLiability)
  //       this.leaseBool = false;
  //     }
  //     else{
  //       this.leaseBool = true;
  //     }
 
  //     this.cd.detectChanges();
      
  //   });


  //   function calculateMonth(monthService) {
  //     if (monthService.toLowerCase() == "Jan".toLowerCase()) {
  //       return "01"
  //     }
  //     if (monthService.toLowerCase() == "Feb".toLowerCase()) {
  //       return "02"
  //     }
  //     if (monthService.toLowerCase() == "Mar".toLowerCase()) {
  //       return "03"
  //     }
  //     if (monthService.toLowerCase() == "Apr".toLowerCase()) {
  //       return "04"
  //     }
  //     if (monthService.toLowerCase() == "May".toLowerCase()) {
  //       return "05"
  //     }
  //     if (monthService.toLowerCase() == "Jun".toLowerCase()) {
  //       return "06"
  //     }
  //     if (monthService.toLowerCase() == "Jul".toLowerCase()) {
  //       return "07"
  //     }
  //     if (monthService.toLowerCase() == "Aug".toLowerCase()) {
  //       return "08"
  //     }
  //     if (monthService.toLowerCase() == "Sep".toLowerCase()) {
  //       return "09"
  //     }
  //     if (monthService.toLowerCase() == "Oct".toLowerCase()) {
  //       return "10"
  //     }
  //     if (monthService.toLowerCase() == "Nov".toLowerCase()) {
  //       return "11"
  //     }
  //     if (monthService.toLowerCase() == "Dec".toLowerCase()) {
  //       return "12"
  //     }

  //   }

  // }

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
