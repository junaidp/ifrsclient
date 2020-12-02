import { Component, OnInit } from '@angular/core';
import { Globals } from "../globals";
import { paymentService } from "./paymentService";
import { rightService } from "src/app/right-of-use/rightService";
import { ThrowStmt } from '@angular/compiler';
import { JsonPipe } from '@angular/common';
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

  constructor(public paymentService: paymentService, public globals: Globals, public rightService: rightService) { }
  mapUserData: Map<string, Map<string, string>>;
  mapUserFilter: Map<string, Map<string, string>>;

  presentValue: number;

  private setGlobals() {

  }

  public getFilterUserData() {
    //  this.spinner.show();
    // alert(this.leaseName);
    // alert(this.lessorName);
    // alert(this.classOfAsset);
    // alert(this.location);

    // alert(this.vendorName);
    // alert(this.date);

    var data = {
      leaseName: this.leaseName ,
      lessorName: this.lessorName,
      classOfAsset: this.classOfAsset,
      userId: localStorage.getItem('userId'),
      companyId: localStorage.getItem('companyId'),
      location: this.location,
      date: this.date
    };
    //  this.spinner.show();
     alert(JSON.stringify(data));
     this.rightService.getReportData(data).then(response => {
      alert(response.data)
      this.mapUserData = new Map(Object.entries(response.data));
      console.log(response.data)
   });

  }
  ngOnInit() {
    var data = {};
    this.rightService.getUsersData(data).then(response => {
      this.mapUserData = new Map(Object.entries(response.data));
      this.mapUserFilter = new Map(Object.entries(response.data));

      console.log(response.data)
    });
  }

}
