import axios from "axios";
import { Injectable } from "@angular/core";



@Injectable({ providedIn: "root" })
export class DisplayError {
  constructor(public displayError: DisplayError) {
    
    
  }
  async displayErrorMessage(error: any) {
    var msg = '<div class="alert alert-danger"  id = "saveSuccess" role="alert" >' + error + '</div>';
    //   }
    $('#saveSuccess').html(msg);
    $('html, body').animate({
      'scrollTop': $("#saveSuccess").offset().top
    });
    setTimeout(function () {
      $('#saveSuccess .alert').slideToggle();
    }, 6000);
  }


  async displayErrorMessageWithSpecificDiv(error: any,divId: any) {
    var msg = '<div class="alert alert-danger"  role="alert" >' + error + '</div>';
    //   }
    $('#'+divId).html(msg);
    $('html, body').animate({
      'scrollTop': $('#'+divId).offset().top
    });
    setTimeout(function () {
      $('#'+divId+' .alert').slideToggle();
    }, 6000);
  }
  // async SignUp(data) {

  //   const url = this.globals.APP_URL+"/users/saveUser";
  //    const response = await axios.post(url,data).then(
  //   );
  //   console.log(response);
  //   return response;
  // }
}
