import { Component, OnInit } from "@angular/core";
import { CompanyloginService } from "./CompanyloginService";
import { Globals } from "../globals";
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ViewChild, ElementRef } from '@angular/core';
import { allResolved } from "q";

@Component({
  selector: "app-companylogin",
  templateUrl: "./companylogin.component.html",
  styleUrls: ["./companylogin.component.css"]
})
export class CompanyloginComponent implements OnInit {
   
  constructor(public companyloginservice: CompanyloginService, public globals: Globals, private router: Router) { }


   
   ngOnInit() {

     }
 
    SignUp(){
    
}
  closeAlert() {
   
}
}