import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { resetPasswordService } from "./resetPasswordService";

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})

export class ResetPasswordComponent implements OnInit {
  resetPasswordEmail =""
  userId="" 
  constructor(private route: ActivatedRoute, private resetPasswordService : resetPasswordService) { }



  resetPassword() {
    var data = {
      password: this.resetPasswordEmail,
      userId: this.userId
    };
    alert(JSON.stringify(data));
    this.resetPasswordService.resetPassword(data).then(response => {
      //  hide();
      console.log(response.data);
      alert(JSON.stringify(response.data));
    });
    }

  ngOnInit() {

    var query = window.location.search.substring(1);
    var vars = query.split("=");
    var ID = vars[1];
    this.userId = ID
    alert(this.userId)



    // $.ajax({
    //   url: 'http://3f67e325e8e6.ngrok.io/users/activateUser?userId='+ ID,
    //   type: 'POST',
    //   dataType: 'json',
    //   contentType: 'application/json; charset=utf-8',
    //   data: JSON.stringify({
    //     userId: ID
    //   }),

    //   success: function (data) {
    //     alert("Saved successfully");
    //   }

    // });
    $(document).ready(function () {

      $('#mainNavBar').hide();
    });
  }

}
