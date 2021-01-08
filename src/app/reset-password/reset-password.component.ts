import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { resetPasswordService } from "./resetPasswordService";
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})

export class ResetPasswordComponent implements OnInit {
  resetPasswordEmail =""
  userId="" 
  constructor(private route: ActivatedRoute, private resetPasswordService : resetPasswordService,  private spinner: NgxSpinnerService) { }



  resetPassword() {
    this.spinner.show();
    var data = {
      password: this.resetPasswordEmail,
      userId: this.userId
    };
    this.resetPasswordService.resetPassword(data).then(response => {
      this.spinner.hide();
      //  hide();
      console.log(response.data);
      var msg;
      if(response.data.includes("Fail")){
         msg = '<div class="alert alert-danger"  role="alert" > Failed to reset Email please contact your technical department</div>';
         $('#resetUserPasswordResponcePanel').html(msg);
         setTimeout(function () {
           $('#resetUserPasswordResponcePanel .alert').slideToggle();
         }, 6000);
      
        }
      else
      {
        msg = '<div class="alert alert-info"   role="alert" >'+response.data +'</div>';
        $('#resetUserPasswordResponcePanel').html(msg);
        setTimeout(function () {
          $('#resetUserPasswordResponcePanel .alert').slideToggle();
        }, 6000);
      }
     
      });
    }

  ngOnInit() {

    var query = window.location.search.substring(1);
    var vars = query.split("=");
    var ID = vars[1];
    this.userId = ID
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
