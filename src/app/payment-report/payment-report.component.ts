import { Component, OnInit } from '@angular/core';
import { Globals } from "../globals";
import { paymentService } from "./paymentService";
import { rightService } from "src/app/right-of-use/rightService";
import { ThrowStmt } from '@angular/compiler';
import { JsonPipe } from '@angular/common';
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

  constructor(public paymentService: paymentService, public globals: Globals, public rightService: rightService, public journalService: JournalService) { }
  mapUserData: Map<string, Map<string, string>>;
  mapUserFilter: Map<string, Map<string, string>>;

  presentValue: number;

  private setGlobals() {

  }

  public getFilterUserData() {


    this.userId = localStorage.getItem('userId');
    this.companyId = localStorage.getItem('companyId');

    if(this.userId === "undefined"){
      this.userId = 0;
    }
    alert($('#dateSelector').val());
    var ret = ($('#dateSelector').val().split("-"));
   
    var day = 10
    var year = ret[0];
    var month = ret[1];

    this.finalDate =  (30 +"-" +month + "-" + year)
    this.dateSelectorMonth = month
    var data = {
      userId: this.userId,
      companyId: this.companyId,
      year: year,
      month: month
    };
    alert(JSON.stringify(data))
    this.journalService.calculate(data).then(response => {
      console.log(response.data)
      $.each(response.data, function (index) {
        this.map = new Map(Object.entries(response.data[index]));
        console.log(this.map)

      });

    });

  //   var data = {
  //     leaseName: this.leaseName ,
  //     lessorName: this.lessorName,
  //     classOfAsset: this.classOfAsset,
  //     userId: localStorage.getItem('userId'),
  //     companyId: localStorage.getItem('companyId'),
  //     location: this.location,
  //     date: this.date
  //   };
  //   //  this.spinner.show();
  //    alert(JSON.stringify(data));
  //    this.rightService.getReportData(data).then(response => {
  //     alert(response.data)
  //     this.mapUserData = new Map(Object.entries(response.data));
  //     console.log(response.data)
  //  });

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
