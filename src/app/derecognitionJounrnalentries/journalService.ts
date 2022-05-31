import axios from "axios";
import { Injectable } from "@angular/core";
let url = "";
import { Globals } from "../globals";
@Injectable({ providedIn: "root" })
export class JournalService {
  constructor(public globals: Globals) {

  }

  async calculate(data) {
    var paymentInterval = data.paymentIntervals


  url = this.globals.APP_URL+"calculation/journal/yearlySum";
   const response = await axios.post(url, data);
    return response;

  }

  async calculateDepreciation(data) {
    var paymentInterval = data.paymentIntervals
  
  
    url = this.globals.APP_URL+"calculation/yearlyDepreciationjournal";
   const response = await axios.post(url, data);
    return response;
  
  }
}



//   if(paymentInterval.toLowerCase()== "yearly"){
 //   url = "//compliancetool.herokuapp.com/calculation/journal/yearly ";
//  url = "//compliancetool.herokuapp.com/calculation/journal/yearlySum ";
  
  
//   }
  //  if(paymentInterval.toLowerCase()== "monthly"){
  //   url = "//compliancetool.herokuapp.com/calculation/journal/monthly ";
  // }
  // if(paymentInterval.toLowerCase()== "quarterly"){
  //   url = "//compliancetool.herokuapp.com/calculation/journal/quarterly ";
  // } 