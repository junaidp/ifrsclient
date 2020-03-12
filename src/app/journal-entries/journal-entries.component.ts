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
  // ending issue payment div is not showing
  constructor(public journalService: JournalService, public globals: Globals) {

  }
  userId: any
  commencementDateService: Date
  commencementDateS: Date
  dateSelectorMonth: any
  paymentCashBank: any
  monthTotal: number
  repeatMonth: number


  leaseLiabilityEnding: number
  leaseLiabilityBeginning: number
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
  drValue: number;

  startDate: any;
  endDate: any;
  aboveColj: any

  fullDate: ""
  ServiceDrValue = 0;

  calculate() {
    $('#paymentMonthBeginningDiv').show();
    $('#beginningView').show();
    this.userId = localStorage.getItem('userId');
    // alert($('#dateSelector').val());
    var ret = ($('#dateSelector').val().split("-"))
    var day = 10
    var year = ret[0];
    var month = ret[1];
    this.dateSelectorMonth = month
    var data = {
      userId: this.userId,
      year: year,
      month: month
    };
    this.journalService.calculate(data).then(response => {
      console.log(response.data)
      var sumOfdr = 0;
      var sumOfpaymentCashBank = 0
      var sumOfmonthTotal = 0
      var sumOfrepeatMonth = 0

      var sumOfleaseLiabilityEnding = 0
      var sumOfleaseLiabilityBeginning = 0
      var sumOfaccruedLiabilityMonthly = 0

      var sumOftotalOfMonth = 0
      var sumOfrepeatedMonthValue = 0
      var sumOfrepeatedMonthAccrued = 0
      var sumOffinanceCost = 0

      alert("serviceCalled")
      $.each(response.data, function (index) {

        // setting all the values to null in startup
        this.repeatedMonthValue = 0
        this.drValue = 0
        this.totalOfMonth = 0
        this.financeCost = 0
        this.leaseLiabilityEnding = 0
        this.leaseLiabilityBeginning = 0
        this.repeatMonth = 0
        this.repeatedMonthAccrued = 0
        this.ServiceDrValue = 0


        var paymentEnding = "Ending"
        var paymentBeginning = "Beginning"

        this.map = new Map(Object.entries(response.data[index]));
        var paymentInGlobal = response.data[index].paymentsAt;
        var commencementDateSer = (response.data[index].commencementDate)
        var paymentIntervalsService = response.data[index].paymentIntervals;
        var commencementDateService = (commencementDateSer.split(" "))
        var monthService = commencementDateService[1]
        var dayService = commencementDateService[2]
        var yearService = commencementDateService[5]

        // settign valuesfrom api call srive 
        this.drValue = this.map.get('dr') //g,h,i column
        this.totalOfMonth = this.map.get('total') // sum of g,h,i
        this.repeatedMonthValue = this.map.get('repeat'); // column j
        this.financeCost = this.map.get('financeCharge'); // fc
        this.repeatedMonthAccrued = this.map.get('RepeatmonthAccrued');
        this.commencementDateS = this.map.get('commencementDate');


        // for rounding off upto 0 dc
        this.drValue = Math.round(this.drValue)
        this.totalOfMonth = Math.round(this.totalOfMonth)
        this.repeatedMonthValue = Math.round(this.repeatedMonthValue)
        this.financeCost = Math.round(this.financeCost)
        this.repeatedMonthAccrued = Math.round(this.repeatedMonthAccrued)

        // check to check whether its ending selected and month is equals to payment month then subtract repeated moth from dr value
        var payment = this.map.get('payment');
        //if month = cm,ncmnt month nd payment = ending sybtract repeated month from dr valu 
        if ((monthService == month) && (paymentInGlobal.toLowerCase() == paymentEnding.toLowerCase()) && (paymentIntervalsService.toLowerCase() == "yearly")) {
          this.drValue = Math.round(this.drValue - this.repeatedMonthValue)
          //calculationg accrued liability for ending yearly
          this.totalOfMonth = Math.round(this.totalOfMonth - this.repeatedMonthAccrued) //it should be repatMonthAccrued
        }

        //if user selects monthly and payment intervals as ending then fcPayment should be picked from column I accrued liability * os actually now fc *form coumn H 1 value above from the row, //cash bank is comiong but not being populated.// dr calue is correct
        if ((paymentIntervalsService.toLowerCase() == "monthly") && (paymentInGlobal.toLowerCase() == paymentEnding.toLowerCase())) {
          this.totalOfMonth = this.map.get('accuredLiabality')
          this.repeatedMonthValue = this.map.get('financeCostRemaining')
          this.repeatedMonthAccrued = Math.round(this.repeatedMonthAccrued)
          this.totalOfMonth = Math.round(this.totalOfMonth)

        }
        //monthTotal - total of month  and repeat month = repeated value changed due to having issues with nan
        this.paymentCashBank = payment
        this.monthTotal = parseInt(this.totalOfMonth, 10);
        this.repeatMonth = parseInt(this.repeatedMonthValue, 10);


        //calculatiung leaseliability for ending
        this.leaseLiabilityEnding = Math.round(this.paymentCashBank - this.monthTotal - this.repeatMonth)
        //calculatiung leaseliability for Beginning
        this.leaseLiabilityBeginning = Math.round(this.paymentCashBank - this.financeCost)

        //quarter wise payment in beginning paymentydiv would be shown in commencement month and then after every 3 months it should be shown
        // g ,h,i column as dr for the month.. g is first monmth h is 2nd and I is 3rd month .. simple month entry
        //fc and paymentmonth  for payment month should be picked fromt he similar table as it was working

        //**ending */
        //total = sum of i ,j,k
        // for ending fc and accruued liability should be puicked from g ,h,i column
        //fc for payment month ending should be picked from column j above
        //for every quarter start month dr should be subtracted from 1 value above the J column
        //total(accruedliability payment month should be subtracted from coluumn j 1 value above)

        //if ((paymentIntervalGlobal.toLowerCase() == "quarterly") && (paymentInGlobal.toLowerCase() == paymentBeginning.toLowerCase())) {

        //first of all check whether its quarterly then check if payment month = month then check whether payment = beginning or ending

        if (paymentIntervalsService.toLowerCase() == "quarterly") {
          this.startDate = this.map.get('startDate')
          var paymentDate = this.startDate.split("-")
          var paymentYear = paymentDate[0];
          var paymentMonth = paymentDate[1];

          var ret = ($('#dateSelector').val().split("-"))
          var day = 10
          var year = ret[0];
          var userSelectedMonth = ret[1];
          if (userSelectedMonth == paymentMonth) {
            $('#paymentMonthEndingDiv').show();
            $('#paymentMonthBeginningDiv').show();
          }
          else {
            $('#paymentMonthEndingDiv').hide();
            $('#paymentMonthBeginningDiv').hide();
          }

          if (paymentInGlobal.toLowerCase() == paymentBeginning.toLowerCase()) {

            //begining
            this.drValue = this.map.get('dr')
            this.financeCost = this.map.get('financeCharge');
            var payment = this.map.get('payment');

            //for round to 0 dc
            this.drValue = Math.round(this.drValue)
            this.financeCost = Math.round(this.financeCost)

            this.paymentCashBank = payment
            this.leaseLiabilityBeginning = Math.round(this.paymentCashBank - this.financeCost)
          }

          //  (paymentInGlobal.toLowerCase() == paymentEnding.toLowerCase())
          else {
            //ending
            this.drValue = this.map.get('dr')
            this.repeatedMonthValue = this.map.get('repeat')
            this.aboveColj = this.map.get('aboveColJ')
            this.paymentCashBank = this.map.get('payment')
            this.totalOfMonth = this.map.get('total')
            this.repeatedMonthAccrued = this.map.get('repeatmonthAccrued');
            //for rounding to 0
            this.drValue = Math.round(this.drValue)
            this.aboveColj = Math.round(this.aboveColj)
            this.paymentCashBank = Math.round(this.paymentCashBank)
            this.totalOfMonth = Math.round(this.totalOfMonth)
            this.repeatedMonthValue = Math.round(this.repeatedMonthValue)
            this.repeatedMonthAccrued = Math.round(this.repeatedMonthAccrued)

            var aboveJ = this.aboveColj
            var financeCostNormalMonth = this.drValue
            var finaceCostPAymentMonth = this.repeatedMonthValue
            var accruedLiabilityPayment = this.totalOfMonth
            //for every quarter start month dr should be subtracted from 1 value above the J column

            //to avoid nan values

            if (this.aboveColj == "" || this.aboveColj == "undefined") {
              this.aboveColj = 0
            }
            if (this.totalOfMonth == "" || this.totalOfMonth == "undefined") {
              this.totalOfMonth = 0;

            }
            if (userSelectedMonth == paymentMonth) {
              this.repeatedMonthValue = this.map.get('aboveColJ')
              this.drValue = Math.round(this.drValue - this.aboveColj)
            }

            //  total(accruedliability payment month should be subtracted from coluumn j 1 value above)
            this.totalOfMonth = Math.round(this.totalOfMonth - this.repeatedMonthAccrued)
            this.leaseLiabilityEnding = Math.round(this.paymentCashBank - this.totalOfMonth - this.repeatedMonthValue)

          }
        }
        sumOfdr += parseInt(this.drValue)


        const monthServiceInt = calculateMonth(monthService);

        function calculateMonth(monthService) {
          if (monthService.toLowerCase() == "Jan".toLowerCase()) {
            return "01"
          }
          if (monthService.toLowerCase() == "Feb".toLowerCase()) {
            return "02"
          }
          if (monthService.toLowerCase() == "Mar".toLowerCase()) {
            return "03"
          }
          if (monthService.toLowerCase() == "Apr".toLowerCase()) {
            return "04"
          }
          if (monthService.toLowerCase() == "May".toLowerCase()) {
            return "05"
          }
          if (monthService.toLowerCase() == "Jun".toLowerCase()) {
            return "06"
          }
          if (monthService.toLowerCase() == "Jul".toLowerCase()) {
            return "07"
          }
          if (monthService.toLowerCase() == "Aug".toLowerCase()) {
            return "08"
          }
          if (monthService.toLowerCase() == "Sep".toLowerCase()) {
            return "09"
          }
          if (monthService.toLowerCase() == "Oct".toLowerCase()) {
            return "10"
          }
          if (monthService.toLowerCase() == "Nov".toLowerCase()) {
            return "11"
          }
          if (monthService.toLowerCase() == "Dec".toLowerCase()) {
            return "12"
          }
          
        }
        $('#beginningView').show();
      //  $('#paymentMonthBeginningDiv').hide();
        if (paymentInGlobal.toLowerCase() == paymentBeginning.toLowerCase() && (month == monthServiceInt)) {
          $('#endingView').hide();
          $('#paymentMonthEndingDiv').hide();
          $('#paymentMonthBeginningDiv').show();
          sumOfpaymentCashBank += parseInt(this.paymentCashBank)
          sumOfleaseLiabilityEnding += parseInt(this.leaseLiabilityEnding)
          sumOfleaseLiabilityBeginning += parseInt(this.leaseLiabilityBeginning)
          sumOftotalOfMonth += parseInt(this.totalOfMonth)
          sumOfrepeatedMonthValue += parseInt(this.repeatedMonthValue)
          sumOffinanceCost += parseInt(this.financeCost)


        }
        else {
            // $('#paymentMonthBeginningDiv').hide();
        }

      });

      this.paymentCashBank = sumOfpaymentCashBank
      this.leaseLiabilityEnding = sumOfleaseLiabilityEnding
      this.leaseLiabilityBeginning = sumOfleaseLiabilityBeginning
      this.totalOfMonth = sumOftotalOfMonth
      this.repeatedMonthValue = sumOfrepeatedMonthValue
      this.financeCost = sumOffinanceCost
      this.drValue = sumOfdr

    });
  }

   ngOnInit() {
  //   // if monthly in selected then payment month div will be shown in all conditions 

  //   var commencementDateOld = (this.globals.commencementDate.split("-"))
  //   var comencementMonth = commencementDateOld[1];
  //   var commencementyear = commencementDateOld[0];
  //   var paymentInterval = this.globals.paymentIntervals
  //   // at startup hiding all the divs ..
     $('#endingView').hide();
     $('#beginningView').hide();
  //   if (paymentInterval.toLowerCase() !== "quarterly") {

  //     $('#paymentMonthEndingDiv').show();
  //     $('#paymentMonthBeginningDiv').show();
  //   }
  //   if (paymentInterval.toLowerCase() !== "monthly") {

  //     $('#paymentMonthEndingDiv').hide();
  //     $('#paymentMonthBeginningDiv').hide();
  //   }

  //   var paymentIn = this.globals.paymentsAt
  //   var paymentBeginning = "Beginning"
  //   var paymentEnding = "Ending"

  //   // for showing user selected beginning or ending view shown accordingly
  //   if (paymentIn.toLowerCase() == paymentEnding.toLowerCase()) {
  //     $('#endingView').show();
  //   }
  //   if (paymentIn.toLowerCase() == paymentBeginning.toLowerCase()) {
  //     $('#beginningView').show();
  //   }

  //   // dateSelector change event

  //   $('#dateSelector').on('change', function () {

  //     //getting and spi;itting the date fromdate Selector
  //     var ret = ($('#dateSelector').val().split("-"))
  //     var day = 10
  //     var year = ret[0];
  //     var month = ret[1];

  //     //if user selects ending then the payment year month will start from the next year of selected commencement year.
  //     if ((commencementyear == year) && (paymentIn.toLowerCase() == paymentEnding.toLowerCase()) && (comencementMonth == month) && (paymentInterval.toLowerCase() !== "monthly")) {
  //       $('#paymentMonthEndingDiv').hide();
  //       1
  //     }

  //     // check if payment month equals tyo commencement month then show payemnt divs
  //     // not hidng fir monthly paymentinterval coz all payment divs should be shown
  //     else if ((comencementMonth == month) || (paymentInterval.toLowerCase() == "monthly")) {

  //       $('#paymentMonthEndingDiv').show();

  //       $('#paymentMonthBeginningDiv').show();
  //     }
  //     else {
  //       $('#paymentMonthBeginningDiv').hide();
  //       $('#paymentMonthDiv').hide();
  //     }
  //     //    this.fullDate = day + "/" + month + "/" + year

  //   });

  //   $("#journal_entry_show").on("click", function () {
  //     $("#journal_entry").toggle("show");
  //     $("#journal_entry1").toggle("show");
  //   });

   }

  
}
