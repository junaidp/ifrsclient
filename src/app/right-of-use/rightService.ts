import axios from "axios";
import { Injectable } from "@angular/core";
const url = "//compliancetool.herokuapp.com/calculation/lease/yearly";

const urlSaveData = "//compliancetool.herokuapp.com/data/saveData";

@Injectable({ providedIn: "root" })
export class rightService {
  async calculate(data) {
  
   const response = await axios.post(url, data);
    return response;
  }

}