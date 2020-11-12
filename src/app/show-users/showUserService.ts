import axios from "axios";
import { Injectable } from "@angular/core";
import { Globals } from "../globals";


@Injectable({ providedIn: "root" })
export class ShowUserService {
  constructor(public globals: Globals) {
    
    
  }

  async showUser(data) {
    console.log(data)
    var  companyId = localStorage.getItem('companyId')
    const url = this.globals.APP_URL+"users/getCompanyUsers?companyId=" +companyId;
     const response = await axios.get(url,data).then(
    );
    console.log(response);
    return response;
  }
}
