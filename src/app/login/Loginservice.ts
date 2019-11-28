import axios from "axios";
import { Injectable } from "@angular/core";
import { stringify } from 'querystring';
const url = "//compliancetool.herokuapp.com/users/signIn";

@Injectable({ providedIn: "root" })
export class Loginservice {
  async signIn(data) {
    alert(data.name);
    alert(data.password)
    const response = await axios.get(url, data);
    return response;
  }
}
