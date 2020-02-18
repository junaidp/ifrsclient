import axios from "axios";
import { Injectable } from "@angular/core";
let url = "";

@Injectable({ providedIn: "root" })
export class JournalService {
  async calculate(data) {
    var paymentInterval = data.paymentIntervals

   if(paymentInterval.toLowerCase()== "yearly"){
 //   url = "//compliancetool.herokuapp.com/calculation/journal/yearly ";
 url = "//compliancetool.herokuapp.com/calculation/journal/yearlySum ";
   }
   if(paymentInterval.toLowerCase()== "monthly"){
    url = "//compliancetool.herokuapp.com/calculation/journal/monthly ";
  }
  if(paymentInterval.toLowerCase()== "quarterly"){
    url = "//compliancetool.herokuapp.com/calculation/journal/quarterly ";
  } 

 
   const response = await axios.post(url, data);
    return response;

  }
}
