import axios from "axios";
import { Injectable } from "@angular/core";
const url = "//compliancetool.herokuapp.com/calculation/journal ";

@Injectable({ providedIn: "root" })
export class DraftService {
  async signIn(data) {
     const response = await axios.post(url, data).then(
    );
    return response;
  }
}
