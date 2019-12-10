import { Component, OnInit } from "@angular/core";
import { PaymentscheduleService } from "./PaymentscheduleService";
import { Globals } from "../globals";
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ViewChild, ElementRef } from '@angular/core';
import { allResolved } from "q";

@Component({
  selector: "app-paymentschedule",
  templateUrl: "./paymentschedule.component.html",
  styleUrls: ["./paymentschedule.component.css"]
})
export class PaymentscheduleComponent implements OnInit {
   constructor(public paymentscheduleservice: PaymentscheduleService, public globals: Globals, private router: Router) {}
 

   
   ngOnInit() {

     }
 
    SignUp(){
    
}
  closeAlert() {
   
}
}