import axios from "axios";
import { Injectable } from "@angular/core";
import { Globals } from "../globals";


@Injectable({ providedIn: "root" })
export class Loginservice {
  constructor(public globals: Globals) {
    
    
  }
  async signIn(data) {
    const url = this.globals.APP_URL+"/users/signIn";
     const response = await axios.post(url, data).then(
    );
    return response;
  }
}
