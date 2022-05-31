import axios from "axios";
import { Injectable } from "@angular/core";
import { Globals } from "../globals";


@Injectable({ providedIn: "root" })
export class resetPasswordCompanyService {
  constructor(public globals: Globals) {
    
    
  }

  async resetPasswordCompany(data) {
    var companyId = data.userId
    var password = data.password
    const url = this.globals.APP_URL+"users/resetPasswordCompany?companyId=" +companyId +"&password="+password;

   // const url = this.globals.APP_URL+"users/resetPassword";
     const response = await axios.post(url,data).then(
    );
    console.log(response);
    return response;
  }
}
