import axios from "axios";
import { Injectable } from "@angular/core";
const url = "//compliancetool.herokuapp.com/calculation/lease/yearly";
import { HttpParams, HttpClient } from '@angular/common/http';
import { Globals } from "../globals";

const urlSaveData = "//compliancetool.herokuapp.com/data/saveData";

@Injectable({ providedIn: "root" })
export class closingbalancesService {

  constructor(public globals: Globals) {
    
    
  }
  async calculate(data) {
  
   const response = await axios.post(url, data);
    return response;
  }

  async getUsersData(data) {
    console.log(data)
    var  userId = localStorage.getItem('userId');
    var  companyId = localStorage.getItem('companyId');
  //   const params = new HttpParams()
  //  .set('userId', userId)
  //  .set('para2', companyId);
    const url = this.globals.APP_URL+"data/getData?userId=" +userId +"&companyId="+companyId;
     const response = await axios.get(url,data).then(
    );

    
    console.log(response);
    return response;
  }



  async getFiltersData(data) {
    console.log(data)
    var filterName = data.filterName
    var  userId = localStorage.getItem('userId');
    var  companyId = localStorage.getItem('companyId');
  //   const params = new HttpParams()
  //  .set('userId', userId)
  //  .set('para2', companyId);
    const url = this.globals.APP_URL+"data/getDataForFilters?userId=" +userId +"&companyId="+companyId + "&filterName="+filterName;
     const response = await axios.get(url,data).then(
    );

    
    console.log(response);
    return response;
  }

  async deleteSelectedLease(data) {
    console.log(data)
    var leaseId = data.leaseId
    const url = this.globals.APP_URL+"data/deleteSelectedLease?leaseId=" +leaseId ;
     const response = await axios.get(url,data).then(
    );

    
    console.log(response);
    return response;
  }

  async getReportData(data) {

    const url = this.globals.APP_URL+"reports/getReportData";
     const response = await axios.post(url,data).then(
    );
    console.log(response);
    return response;
  }

  async getIndividualReportFileByDataId(data) {
    const url = this.globals.APP_URL+"data/getUserFileByDataId?dataId=" +data.dataId;
     const response = await axios.get(url,data).then(
    );
    console.log(response);
    return response;
  }

  async getIndividualReportDataByDataId(data) {
    const url = this.globals.APP_URL+"data/getUserDataByDataId?dataId=" +data.dataId;
     const response = await axios.get(url,data).then(
    );
    console.log(response);
    return response;
  }

  async calculateDataTables(data) {
    const url = this.globals.APP_URL+"calculation/lease/yearlyByDataId?dataId=" +data.dataId;
   const response = await axios.get(url, data);
    return response;
  }
 

}