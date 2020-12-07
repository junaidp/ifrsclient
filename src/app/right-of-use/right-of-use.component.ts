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
  locationIndividual = "";
  otherCondition = "";
  classOfAssetIndividual = "";




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
  //mapIndividualUserDetails: Map<String, String>;
  mapIndividualUserDetails:  Map<string, string>;







  constructor(public rightService: rightService, public leaseService: LeaseService,public globals: Globals) { }
  map1: Map<String, String>;
  mapUserData: Map<string, Map<string, string>>;
  mapIndividualUserData: Map<string, Map<string, string>>;
  mapUserFilter: Map<string, Map<string, string>>;
  mapClassOfAsset: Map<string, Map<string, string>>;

  presentValue: number;
  
  
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
alert("Sdasd")
    var data = {
      leaseName: this.leaseName ,
      lessorName: this.lessorName,
      classOfAsset: this.classOfAsset,
      userId: localStorage.getItem('userId'),
      companyId: localStorage.getItem('companyId')
    };
    //  this.spinner.show();
     alert(data);
     this.rightService.getReportData(data).then(response => {
      alert(response.data)
      this.mapUserData = new Map(Object.entries(response.data));
      console.log(response.data)
   });
    }


  ngOnInit() {
    var globalLInk = this.globals.APP_URL
    $("#dataListUl").on("click", ".dataListLi", function(event){
      var dataId =$(this).attr('id');
      alert($(this).attr('id'))
        var data = {
          dataId: dataId
        };
      //  this.spinner.show();s
    //    alert(data);
    //    this.getFilterUserData();
    //    this.rightService.getIndividualReportDataByDataId(data, dataId).then(response => {
    //     alert(response.data)
    //     this.mapIndividualUserData = new Map(Object.entries(response.data));
    //     console.log(this.mapIndividualUserData)
    //  });
    $.ajax({
      
      type: "GET",
      url: globalLInk+"data/getUserDataByDataId",
      data: data,
  contentType: "application/json;charset-UTF-8",
	    success: function(result, status, xhr){
        
        console.log(jQuery.parseJSON(result))
        var jsondata = jQuery.parseJSON(result)
        alert(jsondata.leaseName)
        this.mapIndividualUserDetails = new Map(Object.values(jsondata))
        console.log(this.mapIndividualUserDetails)
        // this.mapIndividualUserDetails = new Map(Object.arguments(result))
        // console.log(this.mapIndividualUserDetails)
        // console.log(this.mapIndividualUserDetails.dataId)
        // alert(this.mapIndividualUserDetails.leaseName)
       
        // alert(this.mapIndividualUserDetails.value["classOfAsset"])
        // alert(this.mapIndividualUserDetails.get("classOfAsset"))
	    //	$("#fu-filter-selection").html(result)
      },
      error: function() {
        alert('There was some error performing the AJAX call!');
      }
	});
  });
 
    var data = {};
    this.rightService.getUsersData(data).then(response => {
      this.mapUserFilter = new Map(Object.entries(response.data));
      this.mapUserData = new Map(Object.entries(response.data));
      console.log(response.data)
    });
  }

}
