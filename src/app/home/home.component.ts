import { Component, OnInit } from '@angular/core';
import { Globals } from "../globals";
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../auth.service';
import {Signupservice} from "src/app/signup/Signupservice";
import { NgxSpinnerService } from "ngx-spinner";
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  id: string;
  selected = "";
  signUpCompany ; 

  currency= "";
  signUpUserName = "";
  signUpEmail = "";
  signUpCity = "";
  signUpCurency ="";
  signUpPassword = "";
  signUpRepeatPassword = "";
  signUpUserType = "";
  signUpContact = "";
  signUpAddress = "";
  constructor(public globals: Globals, private router: Router, public authService: AuthService , public Signupservice: Signupservice, private spinner: NgxSpinnerService ) {
    if (localStorage.getItem('name') == null && localStorage.getItem('pass') == null) {
      this.router.navigate(['/landing']);

    }
  }

  clickLease() {
    //just added console.log which will display the event details in browser on click of the button.
    this.selected = "/journalEntries"
    this.globals.selectedJournal = this.selected

  }

  clickAdoption() {
    //just added console.log which will display the event details in browser on click of the button.
    this.selected = "/journalEntriesfta"

    this.globals.selectedJournal = this.selected
  }
  clickJournal() {
    //just added console.log which will display the event details in browser on click of the button.

    //if (this.globals.selectedJournal == "/journalEntries") {

      this.router.navigate(['/journalEntries']);
   // }
    // if (this.globals.selectedJournal == "/journalEntriesfta") {
    //   this.router.navigate(['/journalEntriesfta']);
    // }
  }


  SignUp(){
    this.spinner.show();
    this.signUpCompany = localStorage.getItem('companyId')
    if(this.signUpCompany ==null || this.signUpCompany == 0){
      this.logout();
    }
    
    // var hide = divLoader();
     var data = this.setSignUpFormData();
    
     this.Signupservice.SignUp(data).then(response => {

      this.spinner.hide();
        console.log(response.data)
        alert(response.data);
       var msg = '<div class="alert alert-info"  role="alert" >'+response.data +'</div>';

        $('#companyAddUserResponcePanelHome').html(msg);
        $('html, body').animate({
          'scrollTop' : $("#companyAddUserResponcePanelHome").offset().top
      });
        setTimeout(function () {
          $('#companyAddUserResponcePanelHome .alert').slideToggle();
        }, 6000);
        //$('#infoMessage span').text(JSON.stringify(response.data));
    //    this.router.navigate(['/login']);  
     });
   
 }


 private setSignUpFormData() {
  
    this.signUpUserType = "individual";


  // if(this.globals.paymentSchedule == "trial"){
  //   this.signUpUserType = "trialUser"
  // }

  return {
    name: this.signUpUserName,
    email: this.signUpEmail,
    city: this.signUpCity,
    contactNumber: this.signUpContact,
    companyAddress: this.signUpAddress,
    currency: this.signUpCurency,
    userType: this.signUpUserType,
    password: this.signUpPassword,
    confirmpassword: this.signUpRepeatPassword,
    paymentSchedule: localStorage.getItem('paymentSchedule'),
    companyId: localStorage.getItem('companyId')
  };
}


  ngOnInit() {
    this.currency = localStorage.getItem('currency');
    this.signUpCompany = this.globals.companyId;

debugger
    if(localStorage.getItem('userType') == "company" ){
      $('#company_hidden').hide();
      
    }
    else{
      $('.background_img_etl').hide();
    }
    $('#mainNavBar').show();

    var modal = document.getElementById("myModall");
    var btn = document.getElementById("myBtnn");
    var span = document.getElementsByClassName("close")[0];
    btn.onclick = function() {
      modal.style.display = "block";
    }
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
    this.id = localStorage.getItem('token');
  }
  logout(): void {
    console.log("Logout");
    this.authService.logout();
    localStorage.removeItem('name');
    localStorage.removeItem('pass');
    localStorage.removeItem('id');
    localStorage.removeItem('compayId');
    this.router.navigate(['/login']);
  }
}
