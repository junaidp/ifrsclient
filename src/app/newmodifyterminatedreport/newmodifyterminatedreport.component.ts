import { Component, OnInit } from '@angular/core';
import { rightService } from "src/app/right-of-use/rightService";
import { Globals } from "../globals";
import { DisplayError } from "../displayError";


@Component({
  selector: 'app-newmodifyterminatedreport',
  templateUrl: './newmodifyterminatedreport.component.html',
  styleUrls: ['./newmodifyterminatedreport.component.css']
})
export class NewmodifyterminatedreportComponent implements OnInit {
  mapUserData: Map<string, Map<string, string>>;
  mapUserFilter: Map<string, Map<string, string>>;



  leaseName = "";
  lessorName = "";
  classOfAsset = "";
  location = "";
  date = "";
  vendorName = "";
  startingDate = "";
  endingDate = "";
  quickReport = "";
  constructor(public globals: Globals, public displayError: DisplayError, public rightService: rightService) { }

  public getFilterUserData() {
    //  this.spinner.show();
    //  alert(this.leaseName);
    //  alert(this.lessorName);
    //  alert(this.classOfAsset);
    //  alert(this.location);
    //  alert(this.startingDate);
    //  alert(this.endingDate);
    //  alert(this.vendorName);
    //  alert(this.quickReport);
    var data = {
      leaseName: this.leaseName,
      lessorName: this.lessorName,
      classOfAsset: this.classOfAsset,
      userId: localStorage.getItem('userId'),
      companyId: localStorage.getItem('companyId'),
      location: this.location,
      quickReport: this.quickReport,
      startingDate: this.startingDate,
      endingDate: this.endingDate
      //date: this.date
    };
    //  this.spinner.show();
    alert(JSON.stringify(data));
    this.rightService.getReportData(data).then(response => {
      alert(response.data)
      this.mapUserData = new Map(Object.entries(response.data));
      console.log(response.data)
    },
      (error): void => {
        //Error callback
        //this.spinner.hide();
        this.displayError.displayErrorMessage(error);

      });

  }

  ngOnInit() {
    var data = {};
    this.rightService.getUsersData(data).then(response => {
      this.mapUserData = new Map(Object.entries(response.data));
      this.mapUserFilter = new Map(Object.entries(response.data));
      console.log(response.data)
    },
      (error): void => {
        //Error callback
        //this.spinner.hide();
        this.displayError.displayErrorMessage(error);

      });
  }

}
