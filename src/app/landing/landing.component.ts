import { Component, OnInit } from '@angular/core';
import { Loginservice } from "src/app/login/Loginservice";
import { Globals } from "../globals";
import {ViewChild, ElementRef } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {Signupservice} from "src/app/signup/Signupservice";
import {ChangeDetectorRef} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgxSpinnerService } from "ngx-spinner";
declare var $: any;
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
 // for validator if field is empty
  validatorSignUp = true;
  validatorSignIn = true;
  //validator end
  isLoggedIn = true;
  returnUrl: string;
// for sign up variables
  signUpUserName = "";
  signUpEmail = "";
  signUpCity = "";
  signUpCurency ="";
  signUpPassword = "";
  signUpRepeatPassword = "";
  signUpUserType = "";
  signUpContact = "";
  signUpAddress = "";

  //for logging in variables
  signInName = "";
  signInPassword = "";
  signInId = "";
  constructor(public loginservice: Loginservice, public globals: Globals, private router: Router, public authService: AuthService, public Signupservice: Signupservice, private cd : ChangeDetectorRef , private spinner: NgxSpinnerService) {
    
   }
   
  
  SignUp(){
    
   // var hide = divLoader();
    this.checkSignUpEmptyFields();
    var data = this.setSignUpFormData();
    if(this.validatorSignUp){
      this.spinner.show();
    this.Signupservice.SignUp(data).then(response => {
      this.spinner.hide();
    //  hide();

    var msg;
    if(response.data.includes("Fail")){
       msg = '<div class="alert alert-danger"  role="alert" >'+response.data +'</div>';
       $('#signUpResponsePanel').html(msg);
       setTimeout(function () {
         $('#signUpResponsePanel .alert').slideToggle();
       }, 6000);
    
      }
    else
    {
      msg = '<div class="alert alert-info"  id = "signInResponsePanel" role="alert" >'+response.data +'</div>';
      $('#logreg-forms .form-signup').toggle();
      $('#logreg-forms .form-signin').toggle();
      this.isLoggedIn = false
      $('#signInResponsePanel').html(msg);
      setTimeout(function () {
        $('#signInResponsePanel .alert').slideToggle();
      }, 6000);
    }
   

      
       console.log(response.data)
   //    this.router.navigate(['/login']);  
    });
  }
  else{
    this.validatorSignUp = false
    //div to be hidden here
  }
}

  login() {
    
    this.checkSignInEmptyFields();
    //var hide = divLoader();
    var data = {
      name: this.signInName,
      password: this.signInPassword,
      id:this.signInId
    };
   
    $('#exampleModal').css('z-index','-1 !important');
    if(this.validatorSignIn){
    this.spinner.show();
    this.loginService(data);
    }
    else{
      this.validatorSignIn = false
      //loader to be hidedn here
    }
  } 

  private loginService(data: { name: string; password: string; id: string; }) {
    //$('#exampleModal').css('z-index','-1 !important');
    this.loginservice.signIn(data).then(response => {
      this.spinner.hide();
      console.log(response.data);
      if(response.data == null){
        var msg = '<div class="alert alert-danger"  id = "saveSuccess" role="alert" >UserName or Password is invalid</div>';
        $('#signInResponsePanel').html(msg);
        setTimeout(function () {
          $('#signInResponsePanel .alert').slideToggle();
        }, 6000);
      }

      // if(response.data.includes("Activation")){

      //   var msg = '<div class="alert alert-danger"  id = "saveSuccess" role="alert" >Your account is not verified yet by the admin</div>';
      //   $('#signInResponsePanel').html(msg);
      //   setTimeout(function () {
      //     $('#signInResponsePanel .alert').slideToggle();
      //   }, 6000);
      // }

      if (data.name == response.data.email && data.password == response.data.password) 
      {
        $('.modal-backdrop').toggle();
        
        //$('#exampleModal').hide();
        this.setGlobals(response);
        setLocalStorageVariable(response, data);
        this.router.navigate([this.returnUrl]);
        showAddUserOptionInNavBar();
        $('.modal-backdrop').attr('style','display:none !important');
        $('body').css({'overflow':'auto','padding-right':'0px'});
     //   this.getUserDetails();
      }

      else {
        this.isLoggedIn = false;
      }
      //$('.modal-backdrop').attr('style','display:none !important');
    });
  }

  private getUserDetails() {
    var getUserData = {
      userId: this.globals.userId
    };

    this.loginservice.getUserData(getUserData).then(response => {
      //  hide();
      console.log(response.data);
      alert(JSON.stringify(response.data));
    });
  }

  bronzeClick() {
    this.globals.paymentSchedule = "bronze";
    };
  silverClick() {
    this.globals.paymentSchedule = "silver";
    };
  goldClick() {
    this.globals.paymentSchedule = "gold";
    };
  trialClick() {
    this.globals.paymentSchedule = "trial";
    };

    closeAlert() {
      this.validatorSignIn = true;
      this.validatorSignUp = true;
       // this.alert.nativeElement.classList.remove('show');
      }
    private setSignUpFormData() {
      if($('#individual_user_checkbox').prop("checked") == true){
        this.signUpUserType = "individual";
      }
      else if($('#company_checkbox').prop("checked") == true){
        this.signUpUserType = "company";
      }
  
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
        paymentSchedule: this.globals.paymentSchedule,
        companyId: this.globals.companyId
      };
    }

    private setGlobals(response) {
      this.globals.userId = response.data.userId;
      this.globals.userName = response.data.name;
      this.signInId = response.data.userId
      this.globals.companyId = response.data.companyId
    }
    private checkSignInEmptyFields() {
      if (this.signInName == "" || this.signInPassword == "") {
        this.validatorSignIn = false;
        var msg = '<div class="alert alert-danger"  id = "saveSuccess" role="alert" >Please Fill up All fields</div>';
        $('#signInResponsePanel').html(msg);
        setTimeout(function () {
          $('#signInResponsePanel .alert').slideToggle();
        }, 6000);
      }
      else{
        this.validatorSignIn = true;
      }
    }
    private checkSignUpEmptyFields() {
      if (this.signUpUserName == "" || this.signUpPassword == "" || this.signUpRepeatPassword == ""|| this.signUpCity == ""|| this.signUpContact == ""|| this.signUpCurency == "") {
       
        this.validatorSignUp = false;
        var msg = '<div class="alert alert-danger  id = "saveSuccess" role="alert" >Please Fill up All fields</div>';
        $('#signUpResponsePanel').html(msg);
        setTimeout(function () {
          $('#signUpResponsePanel .alert').slideToggle();
        }, 6000);
      }
      else{
        this.validatorSignUp = true;
      }
    }
  divLoader() {
    var myDiv = document.getElementById("overlaylogin"),

        showww = function() {
            myDiv.style.display = "block";
            setTimeout(hide, 500); // 5 seconds
        },

        hide = function() {
            myDiv.style.display = "none";
        };

    showww();
};
scrollToElement($element): void {
  console.log($element);
  $element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
}

  ngOnInit() {
    

    this.divLoader();
    this.returnUrl = '/home';
    this.authService.logout();
    $('#user-name').on('input', function() {
      var input=$(this);
      var is_name=input.val();
      if(is_name){input.removeClass("invalid").addClass("valid");}
      else{input.removeClass("valid").addClass("invalid");}
    });
    $('#contact_number').keyup('input', function() {
      var input=$(this);
      var is_number=input.val();
      if(is_number){input.removeClass("invalid").addClass("valid");}
      else{input.removeClass("valid").addClass("invalid");}
    });
    $('#user-email').on('input', function() {
      var input=$(this);
      var re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      var is_email=re.test(input.val());
      if(is_email){input.removeClass("invalid").addClass("valid");}
      else{input.removeClass("valid").addClass("invalid");}
    });

    //pass
    $('#user-pass, #user-repeatpass').on('keyup', function () {
      if ($('#user-pass').val() == $('#user-repeatpass').val()) {
        $('#message').html('Matching').css('color', 'green');
      } else 
        $('#message').html('Not Matching').css('color', 'red');
    });
    //pass

    $('.modal-backdrop').hide();

    (function($) {

      $("input:checkbox").on('click', function() {
        // in the handler, 'this' refers to the box clicked on
        var $box = $(this);
        if ($box.is(":checked")) {
            // the name of the box is retrieved using the .attr() method
            // as it is assumed and expected to be immutable
            var group = "input:checkbox[name='" + $box.attr("name") + "']";
            // the checked state of the group/box on the other hand will change
            // and the current value is retrieved using .prop() method
            $(group).prop("checked", false);
            $box.prop("checked", true);
        } else {
            $box.prop("checked", false);
        }
    });

       $('#bronzeMember').on('click' , function(){
        alert("sad");
       });
      // Add smooth scrolling to all links in navbar
      $(".navbar a,a.btn-appoint, .quick-info li a, .overlay-detail a").on('click', function(event) {
    
        var hash = this.hash;
        if (hash) {
          event.preventDefault();
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 900, function() {
            window.location.hash = hash;
          });
        }
    
      });
    
      $(".navbar-collapse a").on('click', function() {
        $(".navbar-collapse.collapse").removeClass('in');
      });
    
      //jQuery to collapse the navbar on scroll
      $(window).scroll(function() {
        if ($(".navbar-default").offset().top > 50) {
          $(".navbar-fixed-top").addClass("top-nav-collapse");
        } else {
          $(".navbar-fixed-top").removeClass("top-nav-collapse");
        }
      });
    
    });
    
    $( document ).ready(function() {
      $('#mainNavBar').hide();
  });
  }
}
function setLocalStorageVariable(response, data: { name: string; password: string; id: string; }) {
  localStorage.setItem('isLoggedIn', "true");
  localStorage.setItem('userType', response.data.userType);
  localStorage.setItem('name', data.name);
  localStorage.setItem('pass', data.password);
  localStorage.setItem('userId', response.data.userId);
  localStorage.setItem('paymentSchedule', response.data.paymentSchedule);
  localStorage.setItem('companyId' , response.data.companyId);
  localStorage.setItem('currency' , response.data.currency);
}

function showAddUserOptionInNavBar() {
  if (localStorage.getItem('userType') == "company") {
    $('#addUSerOption').show();
    $('#firstTimeAdoptionTab').hide();
  }
  else {
    $('#addUSerOption').hide();
  }
}

function divLoader() {
  var myDiv = document.getElementById("overlaylogin"),

    showww = function () {
      myDiv.style.display = "block";
      //setTimeout(hide, 2000); // 5 seconds
    },
    hide = function () {
      myDiv.style.display = "none";
    };

  showww();
  return hide;
}

function getUserSavedData(userId) {

 
}

