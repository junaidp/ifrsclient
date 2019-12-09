import { Component, OnInit } from "@angular/core";
import { Financeservice } from "./financecostService";
import { Globals } from "../globals";
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ViewChild, ElementRef } from '@angular/core';
import { allResolved } from "q";

@Component({
  selector: "app-finanace",
  templateUrl: "./financecost.component.html",
  styleUrls: ["./financecost.component.css"]
})
export class FinanceComponent implements OnInit {
   constructor(public finanaceservice: Financeservice, public globals: Globals, private router: Router) {}
 

   
   ngOnInit() {

     }
 
    SignUp(){
    
}
  closeAlert() {
   
}
}