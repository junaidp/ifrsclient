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

  async calculateFtaSum(data) {
    var paymentInterval = data.paymentIntervals


    const  url = this.globals.APP_URL+"/calculation/journal/reportSchedulePerYear";
   const response = await axios.post(url, data);
    return response;

  }


  async calculateLeaseLiabilityReport(data) {
    var paymentInterval = data.paymentIntervals


    const  url = this.globals.APP_URL+"/calculation/journal/reportLeaseLiability";
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
    const response = await axios.post(urlSaveData, data).then();
    return response;
  }

  async saveClassOfAsset(data) {

    const url = this.globals.APP_URL+"/data/saveClassOfAsset";
     const response = await axios.post(url,data).then(
    );
    console.log(response);
    return response;
  }

  public addFollowUpAttachment(file: FormData): Observable<any> {
    return this.http.post(this.globals.APP_URL+"/data/addAttachment", file );
  }


  public  bulkUploadLease(file: FormData): Observable<any> {
    return this.http.post(this.globals.APP_URL+"/data/bulkUploadLease", file );
  }

}


//return this.http.post(this.url+'upload',{"file" : formData},{headers: headers})
