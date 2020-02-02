import axios from "axios";
import { Injectable } from "@angular/core";
const urlSaveData = "//compliancetool.herokuapp.com/users/saveUser";
const url = "//compliancetool.herokuapp.com/calculation/fta/lease";
const urlJournal = "//compliancetool.herokuapp.com/calculation/journal/fta";

@Injectable({ providedIn: "root" })
export class FirsttimeadoptionjournalentryService {
  async calculate(data) {
  
    const response = await axios.post(url, data);
     return response;
   }
   async journalFta(data) {
  
    const response = await axios.post(urlJournal, data);
     return response;
   }
  async formdata(data) {


     const response = await axios.post(urlSaveData,data).then(
    );
    return response;
  }
}
