import { Component, OnInit } from "@angular/core";
import { LeaseService } from "./leaseService";
import { Globals } from "../globals";
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";
import { DisplayError } from "../displayError";

import { JsonPipe } from '@angular/common';

declare var $: any;

@Component({
  selector: "app-new-lease",
  templateUrl: "./new-lease.component.html",
  styleUrls: ["./new-lease.component.css"]
})
export class NewLeaseComponent implements OnInit {
  constructor(public leaseService: LeaseService, public displayError: DisplayError
    , public globals: Globals, private router: Router, private spinner: NgxSpinnerService) { }

  fileToUpload: File = null;
  myFiles: any;
  mapClassOfAsset: Map<string, Map<string, string>>;
  map1: Map<String, String>;
  presentValue: number;
  userId: any

  //first tab
  leaseContractNo = "";
  classAsset = "";
  commencementDate = "";
  leaseName = "";
  lessorName = "";
  leasseeName = "";
  location = "";
  assetDescription = "";
  classOfAsset = "";
  assetCode = "";




  //2nd tab question/answer

  answer1 = "";
  answer2 = "";
  answer3 = "";
  answer4 = "";
  answer5 = "";
  answer6 = "";
  answer6new = "";
  answer7 = "";


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

  //getting user

  getFileDetails(e) {
    this.myFiles = []
    console.log(e.target.files);
    for (var i = 0; i < e.target.files.length; i++) {
      this.myFiles.push(e.target.files[i]);
    }
  }


  saveFileWithLeaseId(dataId) {
    //alert(dataId)         
    const frmData = new FormData();
    console.log(this.myFiles)

    for (var i = 0; i < this.myFiles.length; i++) {
      frmData.append("file", this.myFiles[i]);
      frmData.append("id", dataId);
    }
    console.log(frmData)
    //   this.leaseService.addFollowUpAttachment(frmData).subscribe();
    this.leaseService.addFollowUpAttachment(frmData).subscribe(response => {
      console.log(response)
    });
    //);
    console.log(frmData)
  }


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
      contractCurrency: this.contractCurrency


    };

    this.globals.leaseContractNo = this.leaseContractNo,
      this.globals.classAsset = this.classAsset,
      this.globals.commencementDate = this.commencementDate,
      this.globals.paymentsAt = this.paymentsAt,
      this.globals.annualDiscountRate = this.annualDiscountRate,
      this.globals.leaseTerm = this.leaseTerm,
      this.globals.expectedPeriod = this.expectedPeriod,
      this.globals.leasePayment = this.leasePayment,
      this.globals.paymentIntervals = this.paymentIntervals,
      this.globals.initialDirectCost = this.initialDirectCost,
      this.globals.guaranteedResidualValue = this.guaranteedResidualValue,
      this.globals.usefulLifeOfTheAsset = this.usefulLifeOfTheAsset,
      this.globals.escalation = this.escalation,
      this.globals.escalationAfterEvery = this.escalationAfterEvery
    this.spinner.show();


    // alert("calculation for " + this.globals.userName)
    this.leaseService.calculate(data).then(response => {
      this.spinner.hide();
      this.map = new Map(Object.entries(response.data));
      console.log(response.data)
      this.map1 = this.map.get("17");
      this.presentValue = this.map1[9];
      //     alert(this.presentValue)
      this.globals.presentValue = this.presentValue
      /*console.log("In MAP ENTRIES");

      this.map.forEach((value: Map<string, string>, key: string) => {
        for (var key in value) {
          if (value.hasOwnProperty(key)) {
            console.log(key + " -> " + value[key]);
          }
        }
      });*/
    },
      (error): void => {
        //Error callback
        this.spinner.hide();
        this.displayError.displayErrorMessage(error);

      });





  }
  sectionone() {
    $('#step-5').hide();
    $('#step-1').show();
  }
  sectiontwo() {
    $('#step-5').hide();
    $('#step-2').show();
  }
  sectionthree() {
    $('#step-5').hide();
    $('#step-3').show()
  }
  saveData() {
    var conclusion = $('#lease_no').text();
    // alert(conclusion)
    //   alert("sad")
    this.userId = localStorage.getItem('userId');
    if (this.userId === "undefined") {
      this.userId = 0;
    }




    // alert(this.userId)
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
      userId: this.userId,
      companyId: localStorage.getItem('companyId'),
      leaseName: this.leaseName,
      lessorName: this.lessorName,
      lesseeName: this.leasseeName,
      classOfAsset: this.classAsset,
      location: this.location,
      contractCurrency: this.contractCurrency,
      assetDescription: this.assetDescription,
      assetCode: this.assetCode,

      // contractCurrency:this.contractCurrency,
      answer1: this.answer1,
      answer2: this.answer2,
      answer3: this.answer3,
      answer4: this.answer4,
      answer5: this.answer5,
      answer6: this.answer6,
      answer7: this.answer7,
      conclusion: conclusion
    };

    console.log(data)
    this.globals.leaseContractNo = this.leaseContractNo,
      this.globals.classAsset = this.classAsset,
      this.globals.commencementDate = this.commencementDate,
      this.globals.paymentsAt = this.paymentsAt,
      this.globals.annualDiscountRate = this.annualDiscountRate,
      this.globals.leaseTerm = this.leaseTerm,
      this.globals.expectedPeriod = this.expectedPeriod,
      this.globals.leasePayment = this.leasePayment,
      this.globals.paymentIntervals = this.paymentIntervals,
      this.globals.initialDirectCost = this.initialDirectCost,
      this.globals.guaranteedResidualValue = this.guaranteedResidualValue,
      this.globals.usefulLifeOfTheAsset = this.usefulLifeOfTheAsset,
      this.globals.escalation = this.escalation,
      this.globals.escalationAfterEvery = this.escalationAfterEvery
    this.spinner.show();

    this.leaseService.SaveData(data).then(response => {

      this.spinner.hide();
      console.log(JSON.stringify(response.data))

      var dataId = response.data.id


      if (this.myFiles.length > 0) {
        this.saveFileWithLeaseId(dataId);

      }

      var msg;
      // if (response.data.includes("Fail")) {
      //   msg = '<div class="alert alert-danger"  id = "saveSuccess" role="alert" >' + response.data + '</div>';
      // }
      // else {
      msg = '<div class="alert alert-info"  id = "saveSuccess" role="alert" >User,s data saved successfully</div>';
      this.router.navigate(['/newlease/newleasejournalentry']);
      //   }
      $('#saveSuccess').html(msg);
      $('html, body').animate({
        'scrollTop': $("#saveSuccess").offset().top
      });
      setTimeout(function () {
        $('#saveSuccess .alert').slideToggle();
      }, 6000);

      //String ress = JSON.stringify(response.data);
      console.log(msg)

    },
      (error): void => {
        //Error callback
        this.spinner.hide();
        this.displayError.displayErrorMessage(error);

      });
  }

  addClassOfAsset() {
    this.spinner.show();

    var data = {
      classOfAsset: this.classOfAsset,
      companyId: localStorage.getItem('companyId'),
      userId: localStorage.getItem('userId')


    };
    this.leaseService.saveClassOfAsset(data).then(response => {

      this.spinner.hide();

      var msg;
      if (response.data.includes("Fail")) {
        msg = '<div class="alert alert-danger"  role="alert" >' + response.data + '</div>';
        $('#classOfAssetResponcePanel').html(msg);
        setTimeout(function () {
          $('#classOfAssetResponcePanel .alert').slideToggle();
        }, 6000);

      }
      else {
        msg = '<div class="alert alert-info"  id = "" role="alert" >' + response.data + '</div>';
        // $('#logreg-forms .form-signup').toggle();
        // $('#logreg-forms .form-signin').toggle();
        $('#classOfAssetResponcePanel').html(msg);
        setTimeout(function () {
          $('#classOfAssetResponcePanel .alert').slideToggle();
        }, 6000);
      }
      console.log(response.data)
      //    this.router.navigate(['/login']);  
    }
      ,
      (error): void => {
        //Error callback
        this.spinner.hide();
        this.displayError.displayErrorMessage(error);

      });
  }


  public getClassOfAsset() {
    this.spinner.show();
    var data = {
      companyId: localStorage.getItem('companyId'),
      userId: localStorage.getItem('userId')
    };

    this.leaseService.getClassOfAsset(data).then(response => {
      this.spinner.hide();
      this.mapClassOfAsset = new Map(Object.entries(response.data));
      console.log(JSON.stringify(response.data));
    });
  }

  ngOnInit() {
    this.myFiles = []
    this.getClassOfAsset();
    $(document).on('change', '#addnewclass', function () {
      var value1 = ($('option:selected', this).val());
      if ((value1 === "100")) {
        // alert(value1);
        $('.addnewshow').show();
      }
    });
    // var value = $('#lease_no').value();
    // alert(value);
    //$('.lease_no').innerHTML; = value;


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

      allNextBtn.click(function () {
        var curStep = $(this).closest(".setup-content"),
          curStepBtn = curStep.attr("id"),
          nextStepWizard = $('div.setup-panel div a[href="#' + curStepBtn + '"]').parent().next().children("a"),
          curInputs = curStep.find("input[type='text'],input[type='number'],input[type='url']"),
          isValid = true;

        $(".form-group").removeClass("has-error");

        for (var i = 0; i < curInputs.length; i++) {
          if (!curInputs[i].validity.valid) {
            isValid = false;
            $(curInputs[i]).closest(".form-group").addClass("has-error");

          }
        }
        if (!isValid) {
          alert('Fill all Fields');
        }

        if (isValid) {
          nextStepWizard.removeAttr('disabled').trigger('click');

          if (curStepBtn == "step-1") {
            $('.new_lease1').css('display', 'block');
            $('.new_lease').css('display', 'none');
            $('.new_lease2').css('display', 'none');
            $('.new_lease3').css('display', 'none');
            $('.new_lease4').css('display', 'none');
            $('.bolder').css('font-weight', 'normal');
            $('.bolder1').css('font-weight', 'bolder');
            $('.bolder2').css('font-weight', 'normal');
            $('.bolder3').css('font-weight', 'normal');
            $('.bolder4').css('font-weight', 'normal');
          }
          if (curStepBtn == "step-2") {
            $('.new_lease2').css('display', 'block');
            $('.new_lease').css('display', 'none');
            $('.new_lease1').css('display', 'none');
            $('.new_lease3').css('display', 'none');
            $('.new_lease4').css('display', 'none');
            $('.bolder').css('font-weight', 'normal');
            $('.bolder2').css('font-weight', 'bolder');
            $('.bolder1').css('font-weight', 'normal');
            $('.bolder3').css('font-weight', 'normal');
            $('.bolder4').css('font-weight', 'normal');
          }
          if (curStepBtn == "step-3") {
            $('.new_lease3').css('display', 'block');
            $('.new_lease').css('display', 'none');
            $('.new_lease1').css('display', 'none');
            $('.new_lease2').css('display', 'none');
            $('.new_lease4').css('display', 'none');
            $('.bolder').css('font-weight', 'normal');
            $('.bolder3').css('font-weight', 'bolder');
            $('.bolder1').css('font-weight', 'normal');
            $('.bolder2').css('font-weight', 'normal');
            $('.bolder4').css('font-weight', 'normal');
          }
          if (curStepBtn == "step-4") {
            $('.new_lease4').css('display', 'block');
            $('.new_lease').css('display', 'none');
            $('.new_lease1').css('display', 'none');
            $('.new_lease3').css('display', 'none');
            $('.new_lease2').css('display', 'none');
            $('.bolder').css('font-weight', 'normal');
            $('.bolder4').css('font-weight', 'bolder');
            $('.bolder1').css('font-weight', 'normal');
            $('.bolder3').css('font-weight', 'normal');
            $('.bolder2').css('font-weight', 'normal');
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
    btn.onclick = function () {
      modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    // span.onclick = function() {
    // modal.style.display = "none";
    // }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }

    function sectionone() {
      $('#step-5').hide();
      $('#step-1').show();
    }

    function show(select_item) {
      if (select_item == 1) {
        //document.getElementById("lease_no").innerHTML = "whatever";
        document.getElementById('hiddenDiv').style.visibility = 'visible';
        document.getElementById('hiddenDiv').style.display = 'block';
        //document.getElementById('lease_no').style.display='none';
        //document.getElementById('lease_no').style.visibility='hidden';
      }
      else if (select_item == 0) {
        document.getElementById('hiddenDiv').style.visibility = 'hidden';
        document.getElementById('hiddenDiv').style.display = 'none';

        document.getElementById('lease_no').style.display = 'block'
        document.getElementById('lease_no').style.visibility = 'visible';
        document.getElementById('hiddenDiv1').style.visibility = 'hidden';
        document.getElementById('hiddenDiv1').style.display = 'none';
        document.getElementById('hiddenDiv2').style.visibility = 'hidden';
        document.getElementById('hiddenDiv2').style.display = 'none';
        document.getElementById('hiddenDiv3').style.visibility = 'hidden';
        document.getElementById('hiddenDiv3').style.display = 'none';
        document.getElementById('hiddenDiv4').style.visibility = 'hidden';
        document.getElementById('hiddenDiv4').style.display = 'none';
        document.getElementById('hiddenDiv5').style.visibility = 'hidden';
        document.getElementById('hiddenDiv5').style.display = 'none';
      }
    }
    function show1(select_item) {
      if (select_item == 1) {

        document.getElementById('hiddenDiv1').style.visibility = 'visible';
        document.getElementById('hiddenDiv1').style.display = 'block';
        document.getElementById('lease_no').style.display = 'none';
        document.getElementById('lease_no').style.visibility = 'hidden';


      }
      else if (select_item == 0) {
        document.getElementById('hiddenDiv1').style.visibility = 'hidden';
        document.getElementById('hiddenDiv1').style.display = 'none';
        document.getElementById('lease_no').style.display = 'block'
        document.getElementById('lease_no').style.visibility = 'visible';
      }
    }
    function show2(select_item) {
      if (select_item == 0) {
        document.getElementById('hiddenDiv2').style.visibility = 'visible';
        document.getElementById('hiddenDiv2').style.display = 'block';
        document.getElementById('lease_no').style.display = 'none';
        document.getElementById('lease_no').style.visibility = 'hidden';
      }
      else if (select_item == 1) {
        document.getElementById('hiddenDiv2').style.visibility = 'hidden';
        document.getElementById('hiddenDiv2').style.display = 'none';
        document.getElementById('lease_no').style.display = 'block'
        document.getElementById('lease_no').style.visibility = 'visible';
      }
    }
    function show3(select_item) {
      if (select_item == 1) {
        document.getElementById('hiddenDiv3').style.visibility = 'visible';
        document.getElementById('hiddenDiv3').style.display = 'block';
        document.getElementById('lease_no').style.display = 'none';
        document.getElementById('lease_no').style.visibility = 'hidden';
      }
      else if (select_item == 0) {
        document.getElementById('hiddenDiv3').style.visibility = 'hidden';
        document.getElementById('hiddenDiv3').style.display = 'none';
        document.getElementById('lease_no').style.display = 'block'
        document.getElementById('lease_no').style.visibility = 'visible';
      }
    }
    function show4(select_item) {
      if (select_item == 1) {

        document.getElementById('hiddenDiv4').style.visibility = 'visible';
        document.getElementById('hiddenDiv4').style.display = 'block';
        document.getElementById('lease_no').style.display = 'none';
        document.getElementById('lease_no').style.visibility = 'hidden';
      }
      else {

        document.getElementById('hiddenDiv4').style.visibility = 'hidden';
        document.getElementById('hiddenDiv4').style.display = 'none';
        document.getElementById('lease_no').style.display = 'block'
        document.getElementById('lease_no').style.visibility = 'visible';
      }
    }
    function show5(select_item) {
      if (select_item == 1) {

        document.getElementById('hiddenDiv4').style.visibility = 'visible';
        document.getElementById('hiddenDiv4').style.display = 'block';
        document.getElementById('lease_no').style.display = 'none';
        document.getElementById('lease_no').style.visibility = 'hidden';
      }
      else if (select_item == 0) {
        document.getElementById('hiddenDiv5').style.visibility = 'hidden';
        document.getElementById('hiddenDiv5').style.display = 'none';
        document.getElementById('lease_no').style.display = 'block'
        document.getElementById('lease_no').style.visibility = 'visible';
        document.getElementById('lease_yes').style.visibility = 'hidden';
        document.getElementById('lease_yes').style.display = 'none';
      }
      else if (select_item == 2) {
        document.getElementById('hiddenDiv5').style.visibility = 'hidden';
        document.getElementById('hiddenDiv5').style.display = 'none';
        document.getElementById('lease_yes').style.display = 'block'
        document.getElementById('lease_yes').style.visibility = 'visible';
        document.getElementById('lease_no').style.visibility = 'hidden';
        document.getElementById('lease_no').style.display = 'none';
      }
    }
    function show6(select_item) {
      if (select_item == 1) {
        document.getElementById('hiddenDiv5').style.visibility = 'visible';
        document.getElementById('hiddenDiv5').style.display = 'block';
      }
      else if (select_item == 0) {
        document.getElementById('lease_yes').style.visibility = 'hidden';
        document.getElementById('lease_yes').style.display = 'visible';
        document.getElementById('hiddenDiv5').style.visibility = 'hidden';
        document.getElementById('hiddenDiv5').style.display = 'none';
        document.getElementById('lease_no').style.visibility = 'visible';
        document.getElementById('lease_no').style.display = 'block';
      }
    }
    function show7(select_item) {
      if (select_item == 1) {
        document.getElementById('lease_yes').style.visibility = 'visible';
        document.getElementById('lease_yes').style.display = 'block';
        document.getElementById('lease_no').style.visibility = 'hidden';
        document.getElementById('lease_no').style.display = 'none';
      }
      else if (select_item == 0) {
        document.getElementById('lease_no').style.visibility = 'visible';
        document.getElementById('lease_no').style.display = 'block'
        document.getElementById('lease_yes').style.visibility = 'hidden';
        document.getElementById('lease_yes').style.display = 'none';
      }
    }
    function showpopup(select_item) {
      if (select_item == 1) {
        document.getElementById('myModal').style.visibility = 'visible';
        document.getElementById('myModal').style.display = 'block';
      }
    }
    function closess() {
      document.getElementById('myModal').style.display = 'none';
    }
    function showpopupq1() {
      document.getElementById('question_popup1').style.visibility = 'visible';
      document.getElementById('question_popup1').style.display = 'block';
    }
    function closes() {
      document.getElementById('question_popup1').style.display = 'none';
    }
    function showpopupq2() {
      document.getElementById('question_popup2').style.visibility = 'visible';
      document.getElementById('question_popup2').style.display = 'block';
    }
    function showpopupq3() {
      document.getElementById('question_popup3').style.visibility = 'visible';
      document.getElementById('question_popup3').style.display = 'block';
    }
    function showpopupq4() {
      document.getElementById('question_popup4').style.visibility = 'visible';
      document.getElementById('question_popup4').style.display = 'block';
    }
    function showpopupq5() {
      document.getElementById('question_popup5').style.visibility = 'visible';
      document.getElementById('question_popup5').style.display = 'block';
    }
    function showpopupq6() {
      document.getElementById('question_popup6').style.visibility = 'visible';
      document.getElementById('question_popup6').style.display = 'block';
    }
    function showpopupq7() {
      document.getElementById('question_popup7').style.visibility = 'visible';
      document.getElementById('question_popup7').style.display = 'block';
    }
    function shownext() {
      $(".shownext1").toggle("slow");
    }
    function shownext1() {
      $(".shownextq5").toggle("slow");
    }
    function closes4() {
      document.getElementById('question_popup4').style.display = 'none';
    }
    function closes1() {
      document.getElementById('question_popup1').style.display = 'none';
    }
    function closes2() {
      document.getElementById('question_popup2').style.display = 'none';
    }
    function closes3() {
      document.getElementById('question_popup3').style.display = 'none';
    }
    function closes5() {
      document.getElementById('question_popup5').style.display = 'none';
    }
    function closes6() {
      document.getElementById('question_popup6').style.display = 'none';
    }
    function closes7() {
      document.getElementById('question_popup7').style.display = 'none';
    }
    function journal_entry_dis() {
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
