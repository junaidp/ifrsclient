import { Injectable } from '@angular/core';

@Injectable()
export class Globals {
  APP_URL  = "http://4e61c2108e2e.ngrok.io/";
  //APP_URL  = "//7d83bbbe.ngrok.io";
  APP_URL_HEROKU = "//compliancetool.herokuapp.com";
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


}