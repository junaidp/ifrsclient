import axios from "axios";
import { Injectable } from "@angular/core";
const url = "//compliancetool.herokuapp.com/users/signIn";

@Injectable({ providedIn: "root" })
export class Loginservice {
  async signIn(data) {
     const response = await axios.post(url, data).then(
    );
    return response;
  }
}
