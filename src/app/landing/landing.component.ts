import { Component, OnInit } from '@angular/core';
import { Loginservice } from "src/app/login/Loginservice";
import { Globals } from "../globals";
import {ViewChild, ElementRef } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {Signupservice} from "src/app/signup/Signupservice";
import {ChangeDetectorRef} from '@angular/core';

declare var $: any;
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
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
  constructor(public loginservice: Loginservice, public globals: Globals, private router: Router, public authService: AuthService, public Signupservice: Signupservice, private cd : ChangeDetectorRef) { }


  private setGlobals(response) {
    this.globals.userId = response.data.userId;
    this.globals.userName = response.data.name;
    this.signInId = response.data.userId
  }

  SignUp(){
    
   // var hide = divLoader();

    if($('#individual_user_checkbox').prop("checked") == true){
      this.signUpUserType = "individual";
    }
    else if($('#company_checkbox').prop("checked") == true){
      this.signUpUserType = "company";
    }
    validate();
    function validateEmail(email) {
      const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    }
    function validate() {
      const $result = $("#result");
      const email = $("#email").val();
      $result.text("");
    
      if (validateEmail(email)) {
        $result.text(email + " is valid :)");
        $result.css("color", "green");
      } else {
        $result.text(email + " is not valid :-)");
        $result.css("color", "red");
        return ;
      }
      return false;
     
    }
    var data = {
      name: this.signUpUserName ,
      email : this.signUpEmail,
      city : this.signUpCity,
      contactNumber: this.signUpContact,
      companyAddress: this.signUpAddress,
      currency : this.signUpCurency,
      userType: this.signUpUserType,
      password: this.signUpPassword,
      confirmpassword: this.signUpRepeatPassword
    };
    
    this.Signupservice.SignUp(data).then(response => {
    //  hide();
      $('#logreg-forms .form-signup').toggle();
      $('#logreg-forms .form-signin').toggle();
      this.isLoggedIn = false
       console.log(response.data)
   //    this.router.navigate(['/login']);  
    });

  }



  login() {
    var hide = divLoader();
    var data = {
      name: this.signInName,
      password: this.signInPassword,
      id:this.signInId
    };
   

    this.loginService(data);
    hide();
    
    //hide();
  }

  trialLogin() {
    var data = {
      name:"trialLogin",
      password: "trialLogin",
      id:this.signInId
    };
    
    this.loginService(data);
  }


  private loginService(data: { name: string; password: string; id: string; }) {
    this.loginservice.signIn(data).then(response => {
      console.log(response.data);
      if (data.name == response.data.name && data.password == response.data.password) 
      {

        $('.modal-backdrop').toggle();
        //$('#exampleModal').hide();
        this.setGlobals(response);
        localStorage.setItem('isLoggedIn', "true");
        localStorage.setItem('userType', response.data.userType);
        localStorage.setItem('name', data.name);
        localStorage.setItem('pass', data.password);
        localStorage.setItem('userId', response.data.userId);

        this.router.navigate([this.returnUrl]);
        if(localStorage.getItem('userType') == "company" ){
          $('#addUSerOption').show();
          
        }
        else{
          $('#addUSerOption').hide();
        }
       
        $('.modal-backdrop').attr('style','display:none !important');
        $('body').css({'overflow':'auto','padding-right':'0px'});
      }

      else {
        this.isLoggedIn = false;
      }
      //$('.modal-backdrop').attr('style','display:none !important');
    });
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

  ngOnInit() {
    this.divLoader();
    this.returnUrl = '/home';
    this.authService.logout();

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
    
    // function readURL(input) {
    //   if (input.files && input.files[0]) {
    //     var reader = new FileReader();
    
    //     reader.onload = function (e) {
    //         $('#blah')
    //             .attr('src', e.target.result);
    //     };
    
    //     reader.readAsDataURL(input.files[0]);
    //   }
    // }
    
    
    $( document ).ready(function() {
      $('#mainNavBar').hide();
  });
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

