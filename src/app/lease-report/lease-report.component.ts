import { Component, OnInit } from '@angular/core';
import { rightService } from "src/app/right-of-use/rightService";
import { Globals } from "../globals";

@Component({
  selector: 'app-lease-report',
  templateUrl: './lease-report.component.html',
  styleUrls: ['./lease-report.component.css']
})
export class LeaseReportComponent implements OnInit {
  mapUserData: Map<string, Map<string, string>>;

  leaseName = "";
  lessorName = "";
  classOfAsset = "";
  location  = "";
  date = "";
  vendorName = "";
  startingDate = "";
  endingDate = "";
  quickReport = "";
  constructor( public globals: Globals,public rightService: rightService) { }

  public getFilterUserData() {
    //  this.spinner.show();
     alert(this.leaseName);
     alert(this.lessorName);
     alert(this.classOfAsset);
     alert(this.location);
     alert(this.startingDate);
     alert(this.endingDate);
     alert(this.vendorName);
     alert(this.quickReport);
    }

  ngOnInit() {
    var data = {};
    this.rightService.getUsersData(data).then(response => {
      this.mapUserData = new Map(Object.entries(response.data));
      console.log(response.data)
    });
  }

}
