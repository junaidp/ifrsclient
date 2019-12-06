import { Component, OnInit } from "@angular/core";
import { Firsttimeadoptioninitialservice } from "./firsttimeadoptioninitialservice";import { Globals } from "../globals";
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ViewChild, ElementRef } from '@angular/core';
import { AuthService } from '../auth.service';
declare var $: any;

@Component({
  selector: 'app-firsttimeadoptioninitial',
  templateUrl: './firsttimeadoptioninitial.component.html',
  styleUrls: ['./firsttimeadoptioninitial.component.css']
})
 export class FirsttimeadoptioninitialComponent implements OnInit {
  isLoggedIn = true;
  constructor(public firsttimeadoptioninitialservice: Firsttimeadoptioninitialservice, public globals: Globals, private router: Router, public authService: AuthService) { }
  returnUrl: string;
  name = "";
  password = "";

  formdata() {
    var data = {
    
  };
  this.firsttimeadoptioninitialservice.formdata(data).then(response => {
 
  });

  }

  

  ngOnInit() {
    $(document).ready(function () {
      var navListItems = $("div.setup-panel div a"),
        allWells = $(".setup-content"),
        allNextBtn = $(".nextBtn");

      allWells.hide();

      navListItems.click(function (e) {
        e.preventDefault();
        var $target = $($(this).attr("href")),
          $item = $(this);

        if (!$item.hasClass("disabled")) {
          navListItems.removeClass("btn-primary").addClass("btn-default");
          $item.addClass("btn-primary");
          allWells.hide();
          $target.show();
          $target.find("input:eq(0)").focus();
        }
      });

      allNextBtn.click(function () {
        var curStep = $(this).closest(".setup-content"),
          curStepBtn = curStep.attr("id"),
          nextStepWizard = $(
            'div.setup-panel div a[href="#' + curStepBtn + '"]'
          )
            .parent()
            .next()
            .children("a"),
          curInputs = curStep.find("input[type='text'],input[type='url']"),
          isValid = true;
        debugger;
        if (curStepBtn == "step-1") {
          $(".new_lease1").css("display", "block");
          $(".new_lease").css("display", "none");
          $(".new_lease2").css("display", "none");
          $(".new_lease3").css("display", "none");
          $(".new_lease4").css("display", "none");
        }
        if (curStepBtn == "step-2") {
          $(".new_lease2").css("display", "block");
          $(".new_lease").css("display", "none");
          $(".new_lease1").css("display", "none");
          $(".new_lease3").css("display", "none");
          $(".new_lease4").css("display", "none");
        }
        if (curStepBtn == "step-3") {
          $(".new_lease3").css("display", "block");
          $(".new_lease").css("display", "none");
          $(".new_lease1").css("display", "none");
          $(".new_lease2").css("display", "none");
          $(".new_lease4").css("display", "none");
        }
        if (curStepBtn == "step-4") {
          $(".new_lease4").css("display", "block");
          $(".new_lease").css("display", "none");
          $(".new_lease1").css("display", "none");
          $(".new_lease3").css("display", "none");
          $(".new_lease2").css("display", "none");
        }
        $(".form-group").removeClass("has-error");
        for (var i = 0; i < curInputs.length; i++) {
          if (!curInputs[i].validity.valid) {
            isValid = false;
            $(curInputs[i])
              .closest(".form-group")
              .addClass("has-error");
          }
        }

        if (isValid) debugger;
        nextStepWizard.removeAttr("disabled").trigger("click");
      });
      $("div.setup-panel div a.btn-primary").trigger("click");
    });

  }
 
  
  closeAlert() {
  this.isLoggedIn = true
  }
}


