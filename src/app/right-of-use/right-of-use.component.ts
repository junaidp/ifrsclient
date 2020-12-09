import { Component, OnInit } from '@angular/core';
import { Globals } from "../globals";
import { LeaseService } from "../new-lease/leaseService";
import { rightService } from "./rightService";
import { ThrowStmt } from '@angular/compiler';
import { JsonPipe } from '@angular/common';
declare var $: any;

@Component({
  selector: 'app-right-of-use',
  templateUrl: './right-of-use.component.html',
  styleUrls: ['./right-of-use.component.css']
})
export class RightOfUseComponent implements OnInit {

  //////////////////////////// for report dropdown and table below //////////////
  leaseName = "";
  lessorName = "";
  classOfAsset = "";
  location  = "";
  date = "";
  vendorName = "";
  startingDate = "";
  endingDate = "";
  ///////////////////////////////// for individual report data ////////////////////

  leaseContractNo = "";
  classAsset = "";
  commencementDate ="2019-03-11";
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
  mapIndividualUserDetails:  Map<string, string>;
  map: Map<string, Map<string, string>>;
  map1: Map<String, String>;
  presentValue: number;








  constructor(public rightService: rightService, public leaseService: LeaseService,public globals: Globals) { }
  mapUserData: Map<string, Map<string, string>>;
  mapIndividualUserData: Map<string, Map<string, string>>;
  mapUserFilter: Map<string, Map<string, string>>;
  mapClassOfAsset: Map<string, Map<string, string>>;

  
  
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
    var data = {
      leaseName: this.leaseName ,
      lessorName: this.lessorName,
      classOfAsset: this.classOfAsset,
      userId: localStorage.getItem('userId'),
      companyId: localStorage.getItem('companyId')
    };
    //  this.spinner.show();
     this.rightService.getReportData(data).then(response => {
      alert(response.data)
      this.mapUserData = new Map(Object.entries(response.data));
      console.log(response.data)
   });
    }


  ngOnInit() {
    var me =this
    var globalLInk = this.globals.APP_URL
    $("#dataListUl").on("click", ".dataListLi", function(event){
      var dataId =$(this).attr('id');
      alert($(this).attr('id'))
        var data = {
          dataId: dataId
        };
        me.populateUserData(me, data);
        me.populateDataTables(me, data);

  });
 
    var data = {};
    this.rightService.getUsersData(data).then(response => {
      this.mapUserFilter = new Map(Object.entries(response.data));
      this.mapUserData = new Map(Object.entries(response.data));
      console.log(response.data)
    });
  }


  private populateUserData(me: this, data: { dataId: any; }) {
    me.rightService.getIndividualReportDataByDataId(data).then(response => {
      alert(response.data);
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
      console.log(response.data);
    });
  }

  private populateDataTables(me: this, data: { dataId: any; }) {
    alert("calc method called in ts file")
    me.rightService.calculateDataTables(data).then(response => {
      alert(response.data);
      var userDetails = response.data;
      me.map = new Map(Object.entries(response.data));
      console.log(response.data)
      me.map1 = this.map.get("17");
      me.presentValue = this.map1[9];
     
      console.log(response.data);
    });
  }
}


  //     //  this.spinner.show();s
  //   //    alert(data);
  //   //    this.getFilterUserData();
  //   //    this.rightService.getIndividualReportDataByDataId(data, dataId).then(response => {
  //   //     alert(response.data)
  //   //     this.mapIndividualUserData = new Map(Object.entries(response.data));
  //   //     console.log(this.mapIndividualUserData)
  //   //  });
  //   $.ajax({
      
  //     type: "GET",
  //     url: globalLInk+"data/getUserDataByDataId",
  //     data: data,
  // contentType: "application/json;charset-UTF-8",
	//     success: function(result, status, xhr){
        
  //       console.log(jQuery.parseJSON(result))
  //       var userDetails = jQuery.parseJSON(result)
  //       alert(userDetails.leaseName)
  //       this.leaseNameIndividual = userDetails.leaseName;
  //       this.lessorNameIndividual = userDetails.lessorName;
  //       this.classOfAssetIndividual = userDetails.classOfAsset;
  //       this.leaseContractNo = userDetails.leaseContractNo;
  //       this.commencementDate = userDetails.commencementDate;
  //       this.locationIndividual = userDetails.location;
       
  //       //for second tab
  //       this.paymentsAt = userDetails.paymentsAt;
  //       this.annualDiscountRate = userDetails.annualDiscountRate;
  //       this.leaseTerm = userDetails.leaseTerm;
  //       this.expectedPeriod = userDetails.expectedPeriod;
  //       this.leasePayment = userDetails.leasePayment;
  //       this.paymentIntervals = userDetails.paymentIntervals;
  //       this.initialDirectCost = userDetails.initialDirectCost;
  //       this.guaranteedResidualValue = userDetails.guaranteedResidualValue;
  //       this.usefulLifeOfTheAsset = userDetails.usefulLifeOfTheAsset;
  //       this.escalation = userDetails.escalation;
  //       this.escalationAfterEvery = userDetails.escalationAfterEvery;

  //       alert(this.classOfAssetIndividual)
  //   //    this.contractCurrency = userDetails.;

  //       // this.mapIndividualUserDetails = new Map(Object.values(userDetails))
  //       // console.log(this.mapIndividualUserDetails)
  //     },
  //     error: function() {
  //       alert('There was some error performing the AJAX call!');
  //     }
	// });