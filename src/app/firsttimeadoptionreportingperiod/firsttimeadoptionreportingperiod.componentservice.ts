import axios from "axios";
import { Injectable } from "@angular/core";
const url = "//compliancetool.herokuapp.com/users/saveUser";

@Injectable({ providedIn: "root" })
export class firsttimeadoptionreportingperiodservice {

  async formdata(data) {


     const response = await axios.post(url,data).then(
    );
    console.log(response);
    return response;
  }
}
