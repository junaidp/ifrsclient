import { Component, OnInit } from '@angular/core';
import { Globals } from "../globals";
import { LeaseService } from "../new-lease/leaseService";
import { closingbalancesService } from "./closingblancesService";
import { ThrowStmt } from '@angular/compiler';
import { JsonPipe } from '@angular/common';
import { NgxSpinnerService } from "ngx-spinner";
declare var $: any;

@Component({
  selector: 'app-closingbalances',
  templateUrl: './closingbalances.component.html',
  styleUrls: ['./closingbalances.component.css']
})
export class ClosingbalancesComponent implements OnInit {
    //////////////////////////// for report dropdown and table below //////////////
  
    leaseName = "All";
    lessorName = "All";
    classOfAsset = "All";
    location = "";
    date = "";
    vendorName = "";
    startingDate = "";
    endingDate = "";
    ///////////////////////////////// for individual report data ////////////////////
    dataId = ""
    leaseContractNo = "";
    classAsset = "";
    commencementDate = "2019-03-11";
    leaseNameIndividual = "";
    lessorNameIndividual = "";
    leasseeName = "";
    locationIndividual = "hh";
    classOfAssetIndividual = "";
    assetDescriptionIndividual = ""
    //2nd tab question/answer
  
    answer1 = "";
    answer2 = "";
    answer3 = "";
    answer4 = "";
    answer5 = "";
    answer6 = "";
    answer6new = "";
    answer7 = "";
    conclusion = "";
    //3rd tab
    paymentsAt = "";
    annualDiscountRate = "";
    leaseTerm = "";
    expectedPeriod = "";
    leasePayment = "";
    paymentIntervals = "";
    initialDirectCost = "";
    guaranteedResidualValue = "";
    usefulLifeOfTheAsset = "";
    escalation = "";
    escalationAfterEvery = "";
    contractCurrency = "";
    savedFileDb = ""
    //mapIndividualUserDetails: Map<String, String>;
    mapIndividualUserDetails: Map<string, string>;
    map: Map<string, Map<string, string>>;
    map1: Map<String, String>;
    presentValue: number;
  
    //for quetsions hide 
    answer1Bool = true;
    answer2Bool = true;
    answer3Bool = true;
    answer4Bool = true;
    answer5Bool = true;
    answer6Bool = true;
    answer7Bool = true;

  constructor(public closingbalancesService: closingbalancesService, public leaseService: LeaseService, public globals: Globals,private spinner: NgxSpinnerService) { }
  mapUserData: Map<string, Map<string, string>>;
  mapIndividualUserData: Map<string, Map<string, string>>;
  mapUserFilter: Map<string, Map<string, string>>;
  mapClassOfAsset: Map<string, Map<string, string>>;
  mapClassOfAssetFilter: Map<string, string>
  mapLeaseNameFilter: Map<string, string>
  mapLessorNameFilter: Map<string, string>

  public getLeaseFilterValues() {
    var data = {
      filterName: "leaseName"
    };
    this.closingbalancesService.getFiltersData(data).then(response => {
      this.mapLeaseNameFilter = new Map(Object.entries(response.data));
      console.log(this.mapLeaseNameFilter)
    });
  }

  public getFile() {
    var data = {
      dataId: this.dataId
    };
    let thefile = {};
    this.closingbalancesService.getIndividualReportFileByDataId(data).then(response => {

      thefile = new Blob([response.config.url], { type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document" })
      console.log(thefile)
    let url = (response.config.url);
    console.log(url)
    window.open(url);
     // window.location.href = response.data;
   //   this.mapLeaseNameFilter = new Map(Object.entries(response.data));


    // var file = new Blob([response.headers], {type:  'application/docx' });
    // var fileURL = URL.createObjectURL(file);
    // window.open(fileURL);
      
    // var binaryData = [];
    // binaryData.push(response);
    // var url = window.URL.createObjectURL(new Blob(binaryData, {type: "application/docx"}));
    // var a = document.createElement('a');
    // document.body.appendChild(a);
    // a.setAttribute('style', 'display: none');
    // a.setAttribute('target', 'blank');
    // a.href = url;
    // a.download = response.data.filename;
    // a.click();
    // window.URL.revokeObjectURL(url);
    // a.remove();


    });
  }

  public getLessorFilterValues() {
    var data = {
      filterName: "lessorName"
    };
    this.closingbalancesService.getFiltersData(data).then(response => {
      this.mapLessorNameFilter = new Map(Object.entries(response.data));
      console.log(this.mapLessorNameFilter)
    });
  }

  public getClassOfAssetFilterValues() {
    var data = {
      filterName: "classOfAsset"
    };
    this.closingbalancesService.getFiltersData(data).then(response => {
      this.mapClassOfAssetFilter = new Map(Object.entries(response.data));
      console.log(this.mapClassOfAssetFilter)
    });
  }

  public getClassOfAsset() {
    //  this.spinner.show();
    var data = {};

    this.leaseService.getClassOfAsset(data).then(response => {
      //   this.spinner.hide();
      this.mapClassOfAsset = new Map(Object.entries(response.data));
      console.log(JSON.stringify(response.data));
    });
  }

  public getFilterUserData() {
    this.spinner.show();
    var data = {
      leaseName: this.leaseName,
      lessorName: this.lessorName,
      classOfAsset: this.classOfAsset,
      userId: localStorage.getItem('userId'),
      companyId: localStorage.getItem('companyId')
    };
    //  this.spinner.show();
    this.closingbalancesService.getReportData(data).then(response => {
      this.spinner.hide();
      this.mapUserData = new Map(Object.entries(response.data));
      console.log(response.data)
    });
  }


  ngOnInit() {
    this.savedFileDb ="sadasdasd"
    // me will be used instead of this here
    var me = this
    //for click on delete icon for deleting userdara
    this.deleteUsersData(me);


    this.getClassOfAssetFilterValues();
    this.getLeaseFilterValues();
    this.getLessorFilterValues();

    // for opening of userDetails modal wile clicking on details
    this.openUserDetailModal(me);

    var globalLInk = this.globals.APP_URL

    $('#confirm').on('click', function () {
      confirm("Press a button!");
    });
    me.spinner.show();
    this.populateInitialUsersData(me);
  }


  private openUserDetailModal(me: this) {
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
  }

  private deleteUsersData(me: this) {
    $("#dataListUl").on("click", ".dataListLi .row .deleteLease .deleteLeaseIcon", function (event) {
      if (confirm("Press okay if you want to delete this!")) {
        var leaseId = $(this).attr('id');

        var data = {
          leaseId: leaseId
        };
        //alert(data)
        me.closingbalancesService.deleteSelectedLease(data).then(response => {
          // this.mapLessorNameFilter = new Map(Object.entries(response.data));
          console.log(response.data);

          var msg;
          if (response.data.includes("Fail")) {
            msg = '<div class="alert alert-danger"  role="alert" >' + response.data + '</div>';
            $('#rightOfUseResponsePanel').html(msg);
            setTimeout(function () {
              $('#rightOfUseResponsePanel .alert').slideToggle();
            }, 6000);

          }

          else {
            msg = '<div class="alert alert-info"  role="alert" >' + response.data + '</div>';
            $('#rightOfUseResponsePanel').html(msg);
            setTimeout(function () {
              $('#rightOfUseResponsePanel .alert').slideToggle();
            }, 6000);
          }


          me.populateInitialUsersData(me);
          me.getLeaseFilterValues();
          me.getLessorFilterValues();
          me.getClassOfAssetFilterValues();
        });
      }

    });
  }

  private populateInitialUsersData(me: this) {
    var data = {};
    this.closingbalancesService.getUsersData(data).then(response => {
      me.spinner.hide();
      this.mapUserFilter = new Map(Object.entries(response.data));
      this.mapUserData = new Map(Object.entries(response.data));
      console.log(response.data);
    });
  }

  private populateUserData(me: this, data: { dataId: any; }) {
    me.closingbalancesService.getIndividualReportDataByDataId(data).then(response => {
      var userDetails = response.data;
      me.dataId = userDetails.id
      me.leaseNameIndividual = userDetails.leaseName;
      me.lessorNameIndividual = userDetails.lessorName;
      me.classOfAssetIndividual = userDetails.classOfAsset;
      me.leaseContractNo = userDetails.leaseContractNo;
      me.commencementDate = userDetails.commencementDate;
      me.locationIndividual = userDetails.location;
      me.assetDescriptionIndividual = userDetails.assetDescription;

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
      me.conclusion = userDetails.conclusion,
        me.contractCurrency = userDetails.contractCurrency
        me.savedFileDb = userDetails.fileName
      console.log(response.data);

      if (me.answer1 == "") {
        me.answer1Bool = false;
      }
      else {
        me.answer1Bool = true;
      }
      if (me.answer2 == "") {
        me.answer2Bool = false;
      }
      else {
        me.answer2Bool = true;
      }
      if (me.answer3 == "") {
        me.answer3Bool = false;
      }
      else {
        me.answer3Bool = true;
      }
      if (me.answer4 == "") {
        me.answer4Bool = false;
      }
      else {
        me.answer4Bool = true;
      }
      if (me.answer5 == "") {
        me.answer5Bool = false;
      }
      else {
        me.answer5Bool = true;
      }
      if (me.answer6 == "") {
        me.answer6Bool = false;
      }
      else {
        me.answer6Bool = true;
      }
      if (me.answer7 == "") {
        me.answer7Bool = false;
      }
      else {
        me.answer7Bool = true;
      }

    });
  }

  private populateDataTables(me: this, data: { dataId: any; }) {
    me.closingbalancesService.calculateDataTables(data).then(response => {
      var userDetails = response.data;
      me.map = new Map(Object.entries(response.data));
      console.log(response.data)
      me.map1 = this.map.get("17");
      me.presentValue = this.map1[9];

      console.log(response.data);
    });
  }

}
