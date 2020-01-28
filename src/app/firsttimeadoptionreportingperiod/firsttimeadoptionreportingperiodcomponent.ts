import { Component, OnInit } from "@angular/core";
import { Firsttimeadoptionreportingperiodservice } from "./firsttimeadoptionreportingperiodcomponentservice";import { Globals } from "../globals";
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ViewChild, ElementRef } from '@angular/core';
import { AuthService } from '../auth.service';
import { TouchSequence } from "selenium-webdriver";
declare var $: any;
@Component({
  selector: 'app-firsttimeadoptionreportingperiod',
  templateUrl: './firsttimeadoptionreportingperiod.component.html',
  styleUrls: ['./firsttimeadoptionreportingperiod.component.css']
})


 export class FirsttimeadoptionreportingperiodComponent implements OnInit {
  isLoggedIn = true;
  constructor(public Firsttimeadoptionreportingperiodservice: Firsttimeadoptionreportingperiodservice, public globals : Globals)  { }
 
  map1: Map<String, String>;
  presentValue: number;

  //first tab
  leaseContractNo = "";
  classAsset = "";
  commencementDate ="2019-03-11";
  leaseName = "";
  lessorName = "";
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
  answer6new = "Select here";
  answer7 = "Select here";


  //3rd tab
  paymentsAt = "Beginning";
  annualDiscountRate = "3";
  leaseTerm = "10";
  expectedPeriod = "10";
  leasePayment = "2670000";
  paymentIntervals = "Yearly";
  initialDirectCost = "0";
  guaranteedResidualValue = "1000000";
  usefulLifeOfTheAsset = "10";
  escalation = "30";
  escalationAfterEvery = "10";
  contractCurrency = "";
  map: Map<string, Map<string, string>>;

//getting user
userId = "1133"
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
      escalationAfterEvery: this.escalationAfterEvery,
      
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


   // alert("calculation for " + this.globals.userName)
    this.Firsttimeadoptionreportingperiodservice.calculate(data).then(response => {
      this.map = new Map(Object.entries(response.data));
       console.log(response.data)
      this.map1 = this.map.get("17");
      this.presentValue = this.map1[9];
      alert(this.presentValue)
      this.globals.presentValue = this.presentValue
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
  saveData(){
    alert(this.userId)
    var data = {
      userId: this.userId,
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
      escalationAfterEvery: this.escalationAfterEvery,
      // contractCurrency:this.contractCurrency,
      // answer1:this.answer1,
      // answer2:this.answer2,
      // answer3:this.answer3,
      // answer4:this.answer4,
      // answer5:this.answer5,
      // answer6new:this.answer6new,
      // answer7:this.answer7
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

    console.log(JSON.stringify(data))
    this.Firsttimeadoptionreportingperiodservice.SaveData(data).then(response => {
    
      alert(response.data)
      
    
   });
  }
 
  ngOnInit() {

    $(document).ready(function () {

      var navListItems = $('div.setup-panel div a'),
              allWells = $('.setup-content'),
              allNextBtn = $('.nextBtn');
  
      allWells.hide();
  
      navListItems.click(function (e) {
          e.preventDefault();
          var $target = $($(this).attr('href')), $item = $(this);
  
          if (!$item.hasClass('disabled')) {
              navListItems.removeClass('btn-primary').addClass('btn-default');
              $item.addClass('btn-primary');
              allWells.hide();
              $target.show();
              $target.find('input:eq(0)').focus();
          }
      });
  
      allNextBtn.click(function(){
          var curStep = $(this).closest(".setup-content"),
              curStepBtn = curStep.attr("id"),
              nextStepWizard = $('div.setup-panel div a[href="#' + curStepBtn + '"]').parent().next().children("a"),
              curInputs = curStep.find("input[type='text'],input[type='number'],input[type='url']"),
              isValid = true;
              
          $(".form-group").removeClass("has-error");
  
          for(var i=0; i<curInputs.length; i++){
              if (!curInputs[i].validity.valid){
                  isValid = false;
                  $(curInputs[i]).closest(".form-group").addClass("has-error");
                  
              }
          }
          if(!isValid){
              alert('Fill all Fields');
          }
          
          if (isValid){
              nextStepWizard.removeAttr('disabled').trigger('click');
              
              if(curStepBtn == "step-1"){
                  $('.new_lease1').css('display','block');
                  $('.new_lease').css('display','none');
                  $('.new_lease2').css('display','none');
                  $('.new_lease3').css('display','none');
                  $('.new_lease4').css('display','none');
                  $('.bolder').css('font-weight','normal');
                  $('.bolder1').css('font-weight','bolder');
                  $('.bolder2').css('font-weight','normal');
                  $('.bolder3').css('font-weight','normal');
                  $('.bolder4').css('font-weight','normal');
              }
              if(curStepBtn == "step-2"){
                  $('.new_lease2').css('display','block');
                  $('.new_lease').css('display','none');
                  $('.new_lease1').css('display','none');
                  $('.new_lease3').css('display','none');
                  $('.new_lease4').css('display','none');
                  $('.bolder').css('font-weight','normal');
                  $('.bolder2').css('font-weight','bolder');
                  $('.bolder1').css('font-weight','normal');
                  $('.bolder3').css('font-weight','normal');
                  $('.bolder4').css('font-weight','normal');
              }
              if(curStepBtn == "step-3"){
                  $('.new_lease3').css('display','block');
                  $('.new_lease').css('display','none');
                  $('.new_lease1').css('display','none');
                  $('.new_lease2').css('display','none');
                  $('.new_lease4').css('display','none');
                  $('.bolder').css('font-weight','normal');
                  $('.bolder3').css('font-weight','bolder');
                  $('.bolder1').css('font-weight','normal');
                  $('.bolder2').css('font-weight','normal');
                  $('.bolder4').css('font-weight','normal');
              }
              if(curStepBtn == "step-4"){
                  $('.new_lease4').css('display','block');
                  $('.new_lease').css('display','none');
                  $('.new_lease1').css('display','none');
                  $('.new_lease3').css('display','none');
                  $('.new_lease2').css('display','none');
                  $('.bolder').css('font-weight','normal');
                  $('.bolder4').css('font-weight','bolder');
                  $('.bolder1').css('font-weight','normal');
                  $('.bolder3').css('font-weight','normal');
                  $('.bolder2').css('font-weight','normal');
              }
          } 
      });
      $('div.setup-panel div a.btn-primary').trigger('click');
      
  });
  var modal = document.getElementById("myModal");
  
  // Get the button that opens the modal
  var btn = document.getElementById("myBtn");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("closes")[0];

  // When the user clicks the button, open the modal 
  

  // When the user clicks on <span> (x), close the modal
  // span.onclick = function() {
  // modal.style.display = "none";
  // }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
  if (event.target == modal) {
      modal.style.display = "none";
  }
  }

function show(select_item) {
if (select_item == 1) {
    document.getElementById('hiddenDiv').style.visibility='visible';
    document.getElementById('hiddenDiv').style.display='block';
    document.getElementById('lease_no').style.display='none';
    document.getElementById('lease_no').style.visibility='hidden';
} 
else if(select_item == 0){
  document.getElementById('hiddenDiv').style.visibility='hidden';
  document.getElementById('hiddenDiv').style.display='none';
  document.getElementById('lease_no').style.display='block'
  document.getElementById('lease_no').style.visibility='visible';
  document.getElementById('hiddenDiv1').style.visibility='hidden';
  document.getElementById('hiddenDiv1').style.display='none';
  document.getElementById('hiddenDiv2').style.visibility='hidden';
  document.getElementById('hiddenDiv2').style.display='none';
  document.getElementById('hiddenDiv3').style.visibility='hidden';
  document.getElementById('hiddenDiv3').style.display='none';
  document.getElementById('hiddenDiv4').style.visibility='hidden';
  document.getElementById('hiddenDiv4').style.display='none';
  document.getElementById('hiddenDiv5').style.visibility='hidden';
  document.getElementById('hiddenDiv5').style.display='none';
}
}
function show1(select_item) {
  if (select_item == 1) {
    document.getElementById('hiddenDiv1').style.visibility='visible';
    document.getElementById('hiddenDiv1').style.display='block';
    document.getElementById('lease_no').style.display='none';
    document.getElementById('lease_no').style.visibility='hidden';
    
      
  } 
  else if(select_item == 0){
    document.getElementById('hiddenDiv1').style.visibility='hidden';
    document.getElementById('hiddenDiv1').style.display='none';
    document.getElementById('lease_no').style.display='block'
    document.getElementById('lease_no').style.visibility='visible';
  }
}
function show2(select_item) {
  if (select_item == 0) {
      document.getElementById('hiddenDiv2').style.visibility='visible';
      document.getElementById('hiddenDiv2').style.display='block';
      document.getElementById('lease_no').style.display='none';
      document.getElementById('lease_no').style.visibility='hidden';
  } 
  else if (select_item == 1){
      document.getElementById('hiddenDiv2').style.visibility='hidden';
      document.getElementById('hiddenDiv2').style.display='none';
      document.getElementById('lease_no').style.display='block'
      document.getElementById('lease_no').style.visibility='visible';
  }
}
function show3(select_item) {
  if (select_item == 1) {
      document.getElementById('hiddenDiv3').style.visibility='visible';
      document.getElementById('hiddenDiv3').style.display='block';
      document.getElementById('lease_no').style.display='none';
      document.getElementById('lease_no').style.visibility='hidden';
  } 
  else if(select_item == 0){
      document.getElementById('hiddenDiv3').style.visibility='hidden';
      document.getElementById('hiddenDiv3').style.display='none';
      document.getElementById('lease_no').style.display='block'
      document.getElementById('lease_no').style.visibility='visible';
  }
}
function show4(select_item) {
  if (select_item == 1) {
     
      document.getElementById('hiddenDiv4').style.visibility='visible';
      document.getElementById('hiddenDiv4').style.display='block';
      document.getElementById('lease_no').style.display='none';
      document.getElementById('lease_no').style.visibility='hidden';
  } 
  else{
    
      document.getElementById('hiddenDiv4').style.visibility='hidden';
      document.getElementById('hiddenDiv4').style.display='none';
      document.getElementById('lease_no').style.display='block'
      document.getElementById('lease_no').style.visibility='visible';
  }
}
function show5(select_item) {
  if (select_item == 1) {
    
      document.getElementById('hiddenDiv4').style.visibility='visible';
      document.getElementById('hiddenDiv4').style.display='block';
      document.getElementById('lease_no').style.display='none';
      document.getElementById('lease_no').style.visibility='hidden';
  } 
  else if(select_item == 0) {
    document.getElementById('hiddenDiv5').style.visibility='hidden';
    document.getElementById('hiddenDiv5').style.display='none';
    document.getElementById('lease_no').style.display='block'
    document.getElementById('lease_no').style.visibility='visible';
    document.getElementById('lease_yes').style.visibility='hidden';
    document.getElementById('lease_yes').style.display='none';
  }
  else if(select_item == 2) {
      document.getElementById('hiddenDiv5').style.visibility='hidden';
      document.getElementById('hiddenDiv5').style.display='none';
      document.getElementById('lease_yes').style.display='block'
      document.getElementById('lease_yes').style.visibility='visible';
      document.getElementById('lease_no').style.visibility='hidden';
      document.getElementById('lease_no').style.display='none';
  }
}
function show6(select_item) {
  if (select_item == 1) {
    document.getElementById('hiddenDiv5').style.visibility='visible';
    document.getElementById('hiddenDiv5').style.display='block';
  } 
  else if (select_item == 0){
    document.getElementById('lease_yes').style.visibility='hidden';
    document.getElementById('lease_yes').style.display='visible';
    document.getElementById('hiddenDiv5').style.visibility='hidden';
    document.getElementById('hiddenDiv5').style.display='none';
    document.getElementById('lease_no').style.visibility='visible';
    document.getElementById('lease_no').style.display='block';
  }
}
function show7(select_item) {
  if (select_item == 1) {
    document.getElementById('lease_yes').style.visibility='visible';
      document.getElementById('lease_yes').style.display='block';
      document.getElementById('lease_no').style.visibility='hidden';
      document.getElementById('lease_no').style.display='none';
  } 
  else if (select_item == 0){
    document.getElementById('lease_no').style.visibility='visible';
    document.getElementById('lease_no').style.display='block'
      document.getElementById('lease_yes').style.visibility='hidden';
      document.getElementById('lease_yes').style.display='none';
  }
}
function showpopup(select_item) {
  if (select_item == 1) {
    document.getElementById('myModal').style.visibility='visible';
    document.getElementById('myModal').style.display='block';
  } 
}
function closess(){
document.getElementById('myModal').style.display='none';
}
function showpopupq1() {
document.getElementById('question_popup1').style.visibility='visible';
document.getElementById('question_popup1').style.display='block';
}
function closes(){
document.getElementById('question_popup1').style.display='none';
}
function showpopupq2() {
document.getElementById('question_popup2').style.visibility='visible';
document.getElementById('question_popup2').style.display='block';
}
function showpopupq3() {
document.getElementById('question_popup3').style.visibility='visible';
document.getElementById('question_popup3').style.display='block';
}
function showpopupq4() {
document.getElementById('question_popup4').style.visibility='visible';
document.getElementById('question_popup4').style.display='block';
}
function showpopupq5() {
document.getElementById('question_popup5').style.visibility='visible';
document.getElementById('question_popup5').style.display='block';
}
function showpopupq6() {
document.getElementById('question_popup6').style.visibility='visible';
document.getElementById('question_popup6').style.display='block';
}
function showpopupq7() {
document.getElementById('question_popup7').style.visibility='visible';
document.getElementById('question_popup7').style.display='block';
}
function shownext(){
  $(".shownext1").toggle("slow");
}
function shownext1(){
  $(".shownextq5").toggle("slow");
}
function closes4(){
document.getElementById('question_popup4').style.display='none';
}
function closes1(){
document.getElementById('question_popup1').style.display='none';
}
function closes2(){
document.getElementById('question_popup2').style.display='none';
}
function closes3(){
document.getElementById('question_popup3').style.display='none';
}
function closes5(){
document.getElementById('question_popup5').style.display='none';
}
function closes6(){
document.getElementById('question_popup6').style.display='none';
}
function closes7(){
document.getElementById('question_popup7').style.display='none';
}
function journal_entry_dis(){
  $(".journal_display").togle("slow");
}


  
  // function readURL(input) {
  //     if (input.files && input.files[0]) {
  //         var reader = new FileReader();
  
  //         reader.onload = function (e) {
  //             $('#blah')
  //                 .attr('src', e.target.result);
  //         };
  
  //         reader.readAsDataURL(input.files[0]);
  //     }
  // }
  
  // function Validate() {
  //     var password = document.getElementById("txtPassword").value;
  //     var confirmPassword = document.getElementById("txtConfirmPassword").value;
  //     if (password != confirmPassword) {
  //         alert("Passwords do not match.");
  //         return false;
  //     }
  //     return true;
  // }
  

     
  
  }
}


