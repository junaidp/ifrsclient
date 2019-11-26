import axios from "axios";
import { Injectable } from "@angular/core";
const url = "https://compliancetool.herokuapp.com/users/getUser";

@Injectable({ providedIn: "root" })
export class Loginservice {
  async calculate(data) {
    
   
    const response = await axios.get(url, data);
    return response;
  }
}
