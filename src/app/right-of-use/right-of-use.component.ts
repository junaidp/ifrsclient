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

  leaseName = "";
  lessorName = "";
  classOfAsset = "";
  location  = "";
  date = "";
  vendorName = "";
  startingDate = "";
  endingDate = "";

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
    $("#dataListUl").on("click", ".dataListLi", function(event){
      var dataId =$(this).attr('id');
        var data = {
          dataId: '5fbd57a24828ed1551913a68'
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
      url: "http://cace04f49d3c.ngrok.io/data/getUserDataByDataId",
      data: data,
      datatype:"json",
  contentType: "application/json;charset-UTF-8",
	    success: function(result, status, xhr){
        alert(status)
        console.log(result);
	    //	$("#fu-filter-selection").html(result)
      },
      error: function() {
        alert('There was some error performing the AJAX call!');
      }
	});
  });
 
    alert("called page")
    var data = {};
    this.rightService.getUsersData(data).then(response => {
      this.mapUserFilter = new Map(Object.entries(response.data));
      this.mapUserData = new Map(Object.entries(response.data));
      console.log(response.data)
    });
  }

}
