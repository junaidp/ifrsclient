import axios from "axios";
import { Injectable } from "@angular/core";
import { Globals } from "../globals";
import { Observable } from "rxjs";


@Injectable({ providedIn: "root" })
export class LeaseService {
  httpClient: any;
  constructor(public globals: Globals) {
    
    
  }
  async calculate(data) {
    const url = this.globals.APP_URL+"/calculation/lease/yearly";
   const response = await axios.post(url, data);
    return response;
  }

  async SaveData(data) {
    const urlSaveData = this.globals.APP_URL+"/data/saveData";
    const response = await axios.post(urlSaveData, data).then();
    return response;
  }

  async getClassOfAsset(data) {
    const urlSaveData = this.globals.APP_URL+"/data/getClassOfAsset";
    const response = await axios.get(urlSaveData, data).then();
    return response;
  }

  async saveClassOfAsset(data) {

    const url = this.globals.APP_URL+"/data/saveClassOfAsset";
     const response = await axios.post(url,data).then(
    );
    console.log(response);
    return response;
  }


  postFile(fileToUpload: File): Observable<boolean> {
    const endpoint = 'your-destination-url';
    const formData: FormData = new FormData();
    formData.append('fileKey', fileToUpload, fileToUpload.name);
    return this.httpClient
      .post(endpoint, formData, { headers: "yourHeadersConfig" })
      .map(() => { return true; })
      .catch((e) => this.handleError(e));
}
  handleError(e: any) {
    throw new Error("Method not implemented.");
  }
}
