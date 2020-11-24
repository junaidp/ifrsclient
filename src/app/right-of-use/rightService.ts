import axios from "axios";
import { Injectable } from "@angular/core";
const url = "//compliancetool.herokuapp.com/calculation/lease/yearly";
import { Globals } from "../globals";

const urlSaveData = "//compliancetool.herokuapp.com/data/saveData";

@Injectable({ providedIn: "root" })
export class rightService {

  constructor(public globals: Globals) {
    
    
  }
  async calculate(data) {
  
   const response = await axios.post(url, data);
    return response;
  }

  async getUsersData(data) {
    const urlSaveData = this.globals.APP_URL+"/data/getUsersData";
    const response = await axios.post(urlSaveData, data).then();
    return response;
  }

}