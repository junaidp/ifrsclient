import axios from "axios";
import { Injectable } from "@angular/core";
import { Globals } from "../globals";


@Injectable({ providedIn: "root" })
export class ShowUserService {
  constructor(public globals: Globals) {
    
    
  }

  async showUser(data) {
    console.log(data)
    const url = this.globals.APP_URL+"users/getCompanyUsers";
     const response = await axios.get(url,data).then(
    );
    console.log(response);
    return response;
  }
}
