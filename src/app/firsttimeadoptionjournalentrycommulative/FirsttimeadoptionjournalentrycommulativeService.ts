import axios from "axios";
import { Injectable } from "@angular/core";
import { Globals } from "../globals";

@Injectable({ providedIn: "root" })
export class FirsttimeadoptionjournalentrycommulativeService {
  constructor(public globals: Globals) {
    
  }
  async calculate(data) {
    const url = this.globals.APP_URL+"/calculation/fta/lease";
    const response = await axios.post(url, data);
     return response;
   }
   async journalFta(data) {
    const urlJournal = this.globals.APP_URL+"/calculation/journal/fta";
    const response = await axios.post(urlJournal, data);
     return response;
   }
  async formdata(data) {
    const urlSaveData = this.globals.APP_URL+"/users/saveUser";
     const response = await axios.post(urlSaveData,data).then(
    );
    return response;
  }
}
