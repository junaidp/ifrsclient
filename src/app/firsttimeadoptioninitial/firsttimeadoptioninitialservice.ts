import axios from "axios";
import { Injectable } from "@angular/core";
const url = "//compliancetool.herokuapp.com/calculation/fta/lease";
const urlSaveData = "//compliancetool.herokuapp.com/users/saveUser";

@Injectable({ providedIn: "root" })
export class Firsttimeadoptioninitialservice {
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
