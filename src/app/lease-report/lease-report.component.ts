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
  constructor( public globals: Globals,public rightService: rightService) { }

  ngOnInit() {
    var data = {};
    this.rightService.getUsersData(data).then(response => {
      this.mapUserData = new Map(Object.entries(response.data));
      console.log(response.data)
    });
  }

}
