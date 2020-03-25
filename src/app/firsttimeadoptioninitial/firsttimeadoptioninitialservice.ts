
import axios from "axios";
import { Injectable } from "@angular/core";
import { Globals } from "../globals";


@Injectable({ providedIn: "root" })
export class Firsttimeadoptioninitialservice {

  constructor(public globals: Globals) {
    
  }

  async calculate(data) {
    const url = this.globals.APP_URL+"/calculation/fta/lease";


  
    const response = await axios.post(url, data);
 
     return response;
   }
 
   async SaveData(data) {
    const urlSaveData = this.globals.APP_URL+"/data/saveData";
 
     const response = await axios.post(urlSaveData, data).then();
     return response;
   }
}