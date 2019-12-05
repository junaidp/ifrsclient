import { Component, OnInit } from "@angular/core";
import { LeaseService } from "./leaseService";
import {Globals} from "../globals";

declare var $: any;

@Component({
  selector: "app-new-lease",
  templateUrl: "./new-lease.component.html",
  styleUrls: ["./new-lease.component.css"]
})
export class NewLeaseComponent implements OnInit {
  constructor(public leaseService: LeaseService, public globals : Globals) { }
  //first tab
  leaseContractNo = "";
  classAsset = "";
  commencementDate ="";
  leaseName = "";
  leassorName = "";
  leasseeName = "";
  location = "";
  otherCondition = "";




  //2nd tab question/answer

  answer1 = "Select here";
  answer2 = "Select here";
  answer3 = "Select here";
  answer4 = "Select here";
  answer5 = "Select here";
  answer6 = "Select here";
  answer7 = "Select here";


  //3rd tab
  paymentsAt = "";
  annualDiscountRate = "";
  leaseTerm = "";
  expectedPeriod = "";
  leasePayment = "";
  paymentIntervals = "";
  initialDirectCost = "";
  guaranteedResidualValue = "";
  usefulLifeOfTheAsset = "";
  escalation = "";
  escalationAfterEvery = "";
  contractCurrency = "";
  map: Map<string, Map<string, string>>;


  calculate() {




    var data = {
   
      leaseContractNo: this.leaseContractNo,
      classAsset: this.classAsset,
      commencementDate: this.commencementDate,
      paymentsAt: this.paymentsAt,
      annualDiscountRate: this.annualDiscountRate,
      leaseTerm: this.leaseTerm,
      expectedPeriod: this.expectedPeriod,
      leasePayment: this.leasePayment,
      paymentIntervals: this.paymentIntervals,
      initialDirectCost: this.initialDirectCost,
      guaranteedResidualValue: this.guaranteedResidualValue,
      usefulLifeOfTheAsset: this.usefulLifeOfTheAsset,
      escalation: this.escalation,
      escalationAfterEvery: this.escalationAfterEvery
    };
    this.globals.leaseContractNo= this.leaseContractNo,
    this.globals.classAsset= this.classAsset,
    this.globals.commencementDate= this.commencementDate,
    this.globals.paymentsAt= this.paymentsAt,
    this.globals.annualDiscountRate= this.annualDiscountRate,
    this.globals.leaseTerm= this.leaseTerm,
    this.globals.expectedPeriod= this.expectedPeriod,
    this.globals.leasePayment= this.leasePayment,
    this.globals.paymentIntervals= this.paymentIntervals,
    this.globals.initialDirectCost= this.initialDirectCost,
    this.globals.guaranteedResidualValue= this.guaranteedResidualValue,
    this.globals.usefulLifeOfTheAsset= this.usefulLifeOfTheAsset,
    this.globals.escalation= this.escalation,
    this.globals. escalationAfterEvery= this.escalationAfterEvery


    alert(this.globals.escalationAfterEvery)
   // alert("calculation for " + this.globals.userName)
    this.leaseService.calculate(data).then(response => {
      this.map = new Map(Object.entries(response.data));
      
      /*console.log("In MAP ENTRIES");

      this.map.forEach((value: Map<string, string>, key: string) => {
        for (var key in value) {
          if (value.hasOwnProperty(key)) {
            console.log(key + " -> " + value[key]);
          }
        }
      });*/
    });
  }
  private setGlobals() {
  
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
}
