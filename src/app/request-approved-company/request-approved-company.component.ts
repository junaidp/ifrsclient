import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-request-approved-company',
  templateUrl: './request-approved-company.component.html',
  styleUrls: ['./request-approved-company.component.css']
})
export class RequestApprovedCompanyComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
  userId = ""
  ngOnInit() {//console.log(this.route.snapshot.paramMap)
    //this.userId = this.route.snapshot.paramMap.get("id")

    // var url = window.location.pathname;
    // var id = url.substring(url.lastIndexOf('/') + 1);
    // console.log(this.userId);
    // alert(id);
    var query = window.location.search.substring(1);
    var vars = query.split("=");
    var ID = vars[1];
    alert(ID);



    $.ajax({
      url: 'http://3f67e325e8e6.ngrok.io/users/activateCompany?companyId='+ ID,
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
