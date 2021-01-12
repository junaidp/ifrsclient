import axios from "axios";
import { Injectable } from "@angular/core";
import { Globals } from "../globals";
import { Observable } from "rxjs";
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: "root" })
export class LeaseService {
  httpClient: any;
  constructor(public globals: Globals , private http: HttpClient) {
    
    
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


  postFile1(fileToUpload: File): Observable<boolean> {
    alert(fileToUpload)
    
    const endpoint = this.globals.APP_URL+"/data/saveUploadedFiles";
    const formData: FormData = new FormData();
    formData.append('fileKey', fileToUpload, fileToUpload.name);
    alert(JSON.stringify(formData))

    alert(JSON.stringify( fileToUpload.name))
    return this.httpClient
      .post(endpoint, formData, { headers: "yourHeadersConfig" })
      .map(() => { return true; })
      .catch((e) => this.handleError(e));
     
}
  handleError(e: any) {
    throw new Error("Method not implemented.");
  }

  async postFile(data) {
    alert(JSON.stringify(data))

    const url = this.globals.APP_URL+"/data/saveUploadedFiles";
      // var data = {
      //   fileToUplaoad: fileToUpload
      // },
      const response = await axios.post(url,data).then(
     );
     console.log(response);
     return response;
  }


  public addFollowUpAttachment(file: FormData): Observable<any> {
    alert(FormData)
    return this.http.post(this.globals.APP_URL+"/data/addAttachment", file );
  }
}
//return this.http.post(this.url+'upload',{"file" : formData},{headers: headers})
