import axios from "axios";
import { Injectable } from "@angular/core";
import { Globals } from "../globals";


@Injectable({ providedIn: "root" })
export class Signupservice {
  constructor(public globals: Globals) {
    
    
  }

  async SignUp(data) {

    const url = this.globals.APP_URL+"/users/saveUser";
     const response = await axios.post(url,data).then(
    );
    console.log(response);
    return response;
  }

  async getFileByPath(data) {
    const url = this.globals.APP_URL+"data/getFileByPath?path=" +data.path;
     const response = await axios.get(url,data).then(
    );
    console.log(response);
    return response;
  }
}
