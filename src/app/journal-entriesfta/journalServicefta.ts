import axios from "axios";
import { Injectable } from "@angular/core";
import { Globals } from "../globals";
let url = "";

@Injectable({ providedIn: "root" })
export class JournalServicefta {
  constructor(public globals: Globals) {
  }

  async calculate(data) {
    var paymentInterval = data.paymentIntervals

   if(paymentInterval.toLowerCase()== "yearly"){
    url = this.globals.APP_URL+"calculation/journal/yearly ";
   }
   if(paymentInterval.toLowerCase()== "monthly"){
    url = this.globals.APP_URL+"calculation/journal/monthly ";
  }
  if(paymentInterval.toLowerCase()== "quarterly"){
    url = this.globals.APP_URL+"calculation/journal/quarterly ";
  } 

 
   const response = await axios.post(url, data);
    return response;

  }
}
