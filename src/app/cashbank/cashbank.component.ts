import { Component, OnInit } from "@angular/core";
import { Cashbackservice } from "./CashbankService";
import { Globals } from "../globals";
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ViewChild, ElementRef } from '@angular/core';
import { allResolved } from "q";

@Component({
  selector: "app-Cashbank",
  templateUrl: "./cashbank.component.html",
  styleUrls: ["./cashbank.component.css"]
})
export class CashbankComponent implements OnInit {
   constructor(public cashbackservice: Cashbackservice, public globals: Globals, private router: Router) {}
 

   
   ngOnInit() {

     }
 
    SignUp(){
    
}
  closeAlert() {
   
}
}