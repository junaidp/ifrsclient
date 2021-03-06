import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { resetPasswordCompanyService } from "./resetPasswordCompanyService";
import { NgxSpinnerService } from "ngx-spinner";
@Component({
  selector: 'app-reset-password-company',
  templateUrl: './reset-password-company.component.html',
  styleUrls: ['./reset-password-company.component.css']
})
export class ResetPasswordCompanyComponent implements OnInit {

  resetPasswordEmail =""
  companyId="" 
  constructor(private route: ActivatedRoute, private resetPasswordCompanyService : resetPasswordCompanyService,  private spinner: NgxSpinnerService) { }

  resetPassword() {
    this.spinner.show();
    var data = {
      password: this.resetPasswordEmail,
      companyId: this.companyId
    };
    this.resetPasswordCompanyService.resetPasswordCompany(data).then(response => {
      this.spinner.hide();
      //  hide();
      console.log(response.data);
      var msg;
      if(response.data.includes("Fail")){
         msg = '<div class="alert alert-danger"  role="alert" > Failed to reset Email please contact your technical department</div>';
         $('#resetCompanyPasswordResponsePanel').html(msg);
         setTimeout(function () {
           $('#resetCompanyPasswordResponsePanel .alert').slideToggle();
         }, 6000);
      
        }
      else
      {
        msg = '<div class="alert alert-info"   role="alert" >'+response.data +'</div>';
        $('#resetCompanyPasswordResponsePanel').html(msg);
        setTimeout(function () {
          $('#resetCompanyPasswordResponsePanel .alert').slideToggle();
        }, 6000);
      }
     
      });
    }
  
  ngOnInit() {

    

    var query = window.location.search.substring(1);
    var vars = query.split("=");
    var ID = vars[1];
    this.companyId = ID
  
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
