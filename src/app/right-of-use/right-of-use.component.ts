import { Component, OnInit } from '@angular/core';
import { Globals } from "../globals";
import { LeaseService } from "../new-lease/leaseService";
import { rightService } from "./rightService";
import { ThrowStmt } from '@angular/compiler';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-right-of-use',
  templateUrl: './right-of-use.component.html',
  styleUrls: ['./right-of-use.component.css']
})
export class RightOfUseComponent implements OnInit {

  constructor(public rightService: rightService, public leaseService: LeaseService,public globals: Globals) { }
  map1: Map<String, String>;
  mapUserData: Map<string, Map<string, string>>;
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


  ngOnInit() {
    alert("called page")
    var data = {};
    this.rightService.getUsersData(data).then(response => {
      this.mapUserData = new Map(Object.entries(response.data));
      console.log(response.data)
    });
  }

}
