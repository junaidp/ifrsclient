import { Component, OnInit } from '@angular/core';
import { Globals } from "../globals";
import { paymentService } from "./paymentService";
import { rightService } from "src/app/right-of-use/rightService";
import { ThrowStmt } from '@angular/compiler';
import { JsonPipe } from '@angular/common';
import { NgxSpinnerService } from "ngx-spinner";
import { DisplayError } from "../displayError";


import { JournalService } from '../journal-entries/journalService';
import { JournalEntriesComponent } from '../journal-entries/journal-entries.component';
declare var $: any;
@Component({
  selector: 'app-payment-report',
  templateUrl: './payment-report.component.html',
  styleUrls: ['./payment-report.component.css']
})
export class PaymentReportComponent implements OnInit {

  leaseName = "";
  lessorName = "";
  classOfAsset = "";
  location = "";
  date = "";
  vendorName = "";
  startingDate = "";
  endingDate = "";
  userId
  companyId
  finalDate
  dateSelectorMonth


  leaseContractNo = "";
  classAsset = "";
  commencementDate = "2019-03-11";
  leaseNameIndividual = "";
  lessorNameIndividual = "";
  leasseeName = "";
  locationIndividual = "hh";
  otherCondition = "";
  classOfAssetIndividual = "";




  //2nd tab question/answer

  answer1 = "";
  answer2 = "";
  answer3 = "";
  answer4 = "";
  answer5 = "";
  answer6 = "";
  answer6new = "";
  answer7 = "";


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
  //mapIndividualUserDetails: Map<String, String>;
  mapIndividualUserDetails: Map<string, string>;
  map: Map<string, Map<string, string>>;
  map1: Map<String, String>;
  presentValue: number;

  constructor(public paymentService: paymentService, public displayError: DisplayError
    , public globals: Globals, public rightService: rightService, public journalService: JournalService, private spinner: NgxSpinnerService) { }
  mapUserData: Map<string, Map<string, string>>;
  mapUserFilter: Map<string, Map<string, string>>;


  public getFilterUserData() {
    this.spinner.show();


    this.userId = localStorage.getItem('userId');
    this.companyId = localStorage.getItem('companyId');

    if (this.userId === "undefined") {
      this.userId = 0;
    }
    var ret = ($('#dateSelector').val().split("-"));

    var day = 10;
    var year = ret[0];
    var month = ret[1];
    var paymentIntervalsService;
    var payment;
    var paymentInGlobal;
    var paymentEnding = "Ending"
    var paymentBeginning = "Beginning"

    this.finalDate = (30 + "-" + month + "-" + year)
    this.dateSelectorMonth = month
    var data = {
      userId: this.userId,
      companyId: this.companyId,
      year: year,
      month: month
    };
    this.journalService.calculate(data).then(response => {
      this.spinner.hide();
      console.log(response.data)
      $.each(response.data, function (index) {
        this.map = new Map(Object.entries(response.data[index]));
        payment = response.data[index].payment;
        // commencementDateSer = (response.data[index].commencementDate)
        var paymentIntervalsService = response.data[index].paymentIntervals;
        var paymentInGlobal = response.data[index].paymentsAt;
        var commencementDateSer = (response.data[index].commencementDate)
        var commencementDateService = (commencementDateSer.split(" "))
        var monthService = commencementDateService[1]

        if (typeof payment == "undefined" || typeof payment == null) {
          payment = 0
        }

        if (payment >= 0) {
          response.data[index].payment = payment
        }

        const monthServiceInt = calculateMonth(monthService);

        //   alert(paymentIntervalsService)
        if (paymentIntervalsService.toLowerCase() == "yearly") {
          if ((monthServiceInt == month)) {
            //  alert("asd if")
            response.data[index].payment = response.data[index].payment
          }
          else {
            response.data[index].payment = 0
          }
        }
        //     alert(response.data[index].payment)
      });
      this.mapUserData = new Map(Object.entries(response.data))

      console.log(response.data)
      //    console.log(this.mapUserData)
      // $.each(response.data, function (index) {
      //   this.map = new Map(Object.entries(response.data[index]));
      //   console.log(this.map)

      // });

    },
      (error): void => {
        //Error callback
        this.spinner.hide();
        this.displayError.displayErrorMessage(error);

      });

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

  }
  ngOnInit() {
    var me = this
    var globalLInk = this.globals.APP_URL
    $("#dataListUl").on("click", ".dataListLi", function (event) {
      me.spinner.show();
      var dataId = $(this).attr('id');
      var data = {
        dataId: dataId
      };
      me.populateUserData(me, data);
      me.populateDataTables(me, data);
      me.spinner.hide();

    });
    // me.spinner.show();
    // var data = {};
    // this.rightService.getUsersData(data).then(response => {
    //   me.spinner.hide();
    //   this.mapUserFilter = new Map(Object.entries(response.data));
    //   this.mapUserData = new Map(Object.entries(response.data));
    //   console.log(response.data)
    // });
  }

  private populateUserData(me: this, data: { dataId: any; }) {
    me.rightService.getIndividualReportDataByDataId(data).then(response => {
      var userDetails = response.data;
      me.leaseNameIndividual = userDetails.leaseName;
      me.lessorNameIndividual = userDetails.lessorName;
      me.classOfAssetIndividual = userDetails.classOfAsset;
      me.leaseContractNo = userDetails.leaseContractNo;
      me.commencementDate = userDetails.commencementDate;
      me.locationIndividual = userDetails.location;

      //for second tab
      me.paymentsAt = userDetails.paymentsAt;
      me.annualDiscountRate = userDetails.annualDiscountRate;
      me.leaseTerm = userDetails.leaseTerm;
      me.expectedPeriod = userDetails.expectedPeriod;
      me.leasePayment = userDetails.leasePayment;
      me.paymentIntervals = userDetails.paymentIntervals;
      me.initialDirectCost = userDetails.initialDirectCost;
      me.guaranteedResidualValue = userDetails.guaranteedResidualValue;
      me.usefulLifeOfTheAsset = userDetails.usefulLifeOfTheAsset;
      me.escalation = userDetails.escalation;
      me.escalationAfterEvery = userDetails.escalationAfterEvery;
      //   this.mapUserData = new Map(response.data);

      //for question tab
      me.answer1 = userDetails.answer1
      me.answer2 = userDetails.answer2
      me.answer3 = userDetails.answer3
      me.answer4 = userDetails.answer4
      me.answer5 = userDetails.answer5
      me.answer6 = userDetails.answer6
      me.answer7 = userDetails.answer7
      me.contractCurrency = userDetails.contractCurrency
      console.log(response.data);
    },
      (error): void => {
        //Error callback
        this.spinner.hide();
        this.displayError.displayErrorMessage(error);

      });
  }

  private populateDataTables(me: this, data: { dataId: any; }) {
    me.rightService.calculateDataTables(data).then(response => {
      var userDetails = response.data;
      me.map = new Map(Object.entries(response.data));
      console.log(response.data)
      me.map1 = this.map.get("17");
      me.presentValue = this.map1[9];

      console.log(response.data);
    },
      (error): void => {
        //Error callback
        this.spinner.hide();
        this.displayError.displayErrorMessage(error);

      });
  }

}
