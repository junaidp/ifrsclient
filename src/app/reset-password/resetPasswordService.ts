import axios from "axios";
import { Injectable } from "@angular/core";
import { Globals } from "../globals";


@Injectable({ providedIn: "root" })
export class resetPasswordService {
  constructor(public globals: Globals) {
    
    
  }

  async resetPassword(data) {
    var userId = data.userId
    var password = data.password
    const url = this.globals.APP_URL+"users/resetPassword?userId=" +userId +"&password="+password;

   // const url = this.globals.APP_URL+"/users/resetPassword";
     const response = await axios.post(url,data).then(
    );
    console.log(response);
    return response;
  }
}
