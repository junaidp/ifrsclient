import axios from "axios";
import { Injectable } from "@angular/core";
import { Globals } from "../globals";


@Injectable({ providedIn: "root" })
export class LeaseService {
  constructor(public globals: Globals) {
    
    
  }
  async calculate(data) {
    const url = this.globals.APP_URL+"/calculation/lease/yearly";
   const response = await axios.post(url, data);
    return response;
  }

  async SaveData(data) {
    const urlSaveData = this.globals.APP_URL+"/data/saveData";
    const response = await axios.post(urlSaveData, data).then();
    return response;
  }

  async getClassOfAsset(data) {
    const urlSaveData = this.globals.APP_URL+"/data/getClassOfAsset";
    const response = await axios.get(urlSaveData, data).then();
    return response;
  }

  async saveClassOfAsset(data) {

    const url = this.globals.APP_URL+"/data/saveClassOfAsset";
     const response = await axios.post(url,data).then(
    );
    console.log(response);
    return response;
  }
}
