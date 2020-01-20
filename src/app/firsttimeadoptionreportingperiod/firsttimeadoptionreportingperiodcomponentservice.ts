import axios from "axios";
import { Injectable } from "@angular/core";
const url = "//compliancetool.herokuapp.com/calculation/lease/yearly";

const urlSaveData = "//compliancetool.herokuapp.com/data/saveData";

@Injectable({ providedIn: "root" })
export class Firsttimeadoptionreportingperiodservice {

  async calculate(data) {
  
    const response = await axios.post(url, data);
     return response;
   }
 
   async SaveData(data) {
 
     const response = await axios.post(urlSaveData, data).then();
     return response;
   }
}