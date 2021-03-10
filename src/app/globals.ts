import { Injectable } from '@angular/core';

@Injectable()

//3a03924fb95b
//ea902d90105c
export class Globals {
  
  APP_URL  = "http://6b0684a94888.ngrok.io/";
  //APP_URL  = "//7d83bbbe.ngrok.io";
  APP_URL_HEROKU = "//compliancetool.herokuapp.com";
  reportRighOfUseRoute = '/reports/rightofuse'
  userId: string = '';
  userName: string ="";

  // for lease and all 
  selectedJournal = "";
  leaseContractNo = "";
  classAsset = "";
  commencementDate;
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
  presentValue = 0;
  paymentSchedule = "";
  companyId = 0;


}