import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { resetPasswordCompanyService } from "./resetPasswordCompanyService";
@Component({
  selector: 'app-reset-password-company',
  templateUrl: './reset-password-company.component.html',
  styleUrls: ['./reset-password-company.component.css']
})
export class ResetPasswordCompanyComponent implements OnInit {

  resetPasswordEmail =""
  companyId="" 
  constructor(private route: ActivatedRoute, private resetPasswordCompanyService : resetPasswordCompanyService) { }

  resetPassword() {
    var data = {
      password: this.resetPasswordEmail,
      companyId: this.companyId
    };
    alert(JSON.stringify(data));
    this.resetPasswordCompanyService.resetPasswordCompany(data).then(response => {
      //  hide();
      console.log(response.data);
      alert(JSON.stringify(response.data));
    });
    }
  
  ngOnInit() {

    

    var query = window.location.search.substring(1);
    var vars = query.split("=");
    var ID = vars[1];
    this.companyId = ID
    alert(this.companyId)



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
    $('#user-pass, #user-repeatpass').on('keyup', function () {
      if ($('#user-pass').val() == $('#user-repeatpass').val()) {
        $('#message').html('Matching').css('color', 'green');
      } else 
        $('#message').html('Not Matching').css('color', 'red');
    });
  }

}
