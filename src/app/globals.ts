import { Injectable } from '@angular/core';

@Injectable()
export class Globals {
  userId: string = '';
  userName: string ="";

  // for lease and all 
  leaseContractNo = "";
  classAsset = "";
  commencementDate ="";
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


}