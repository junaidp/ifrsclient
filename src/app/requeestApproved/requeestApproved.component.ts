import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import {Globals} from "../globals";
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";


@Component({
  selector: 'app-requeestApproved',
  templateUrl: './requeestApproved.component.html',
  styleUrls: ['./requeestApproved.component.css']
})

export class RequeestApprovedComponent implements OnInit {
  userId = ""
  url = ""

  constructor(private route: ActivatedRoute , public globals: Globals) { }

  ngOnInit() {
    //const url = this.globals.APP_URL+"data/getData";
    //console.log(this.route.snapshot.paramMap)
    //this.userId = this.route.snapshot.paramMap.get("id")

    // var url = window.location.pathname;
    // var id = url.substring(url.lastIndexOf('/') + 1);
    // console.log(this.userId);
    // alert(id);
    this.url = this.globals.APP_URL
    var query = window.location.search.substring(1);
    var vars = query.split("=");
    var ID = vars[1];
    //alert(ID);



    $.ajax({
      url: this.url+'/users/activateUser?userId='+ ID,
      type: 'POST',
      dataType: 'json',
      contentType: 'application/json; charset=utf-8',
      data: JSON.stringify({
        userId: ID
      }),

      success: function (data) {
        alert("Saved successfully");
      }

    });
    $(document).ready(function () {

      $('#mainNavBar').hide();
    });
  }


}
