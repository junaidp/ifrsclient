import axios from "axios";
import { Injectable } from "@angular/core";
const url = "//compliancetool.herokuapp.com/calculation/lease/yearly";
import { Globals } from "../globals";

const urlSaveData = "//compliancetool.herokuapp.com/data/saveData";

@Injectable({ providedIn: "root" })
export class rightService {

  constructor(public globals: Globals) {
    
    
  }
  async calculate(data) {
  
   const response = await axios.post(url, data);
    return response;
  }

  async getUsersData(data) {
    console.log(data)
    var  userId = localStorage.getItem('userId')
    const url = this.globals.APP_URL+"data/getData?userId=" +userId;
     const response = await axios.get(url,data).then(
    );
    console.log(response);
    return response;
  }


 

}