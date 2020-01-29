import axios from "axios";
import { Injectable } from "@angular/core";
const urlSaveData = "//compliancetool.herokuapp.com/users/saveUser";
const url = "//compliancetool.herokuapp.com/calculation/fta/lease";
@Injectable({ providedIn: "root" })
export class FirsttimeadoptionjournalentryService {
  async calculate(data) {
  
    const response = await axios.post(url, data);
     return response;
   }
  async formdata(data) {


     const response = await axios.post(urlSaveData,data).then(
    );
    console.log(response);
    return response;
  }
}
