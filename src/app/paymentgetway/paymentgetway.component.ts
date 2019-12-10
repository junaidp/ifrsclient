import { Component, OnInit } from "@angular/core";
import { PaymentgetwayService } from "./PaymentgetwayService";
import { Globals } from "../globals";
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ViewChild, ElementRef } from '@angular/core';
import { allResolved } from "q";

@Component({
  selector: "app-paymentgetway",
  templateUrl: "./paymentgetway.component.html",
  styleUrls: ["./paymentgetway.component.css"]
})
export class PaymentgetwayComponent implements OnInit {
   constructor(public paymentgetwayservice: PaymentgetwayService, public globals: Globals, private router: Router) {}
 

   
   ngOnInit() {

     }
 
    SignUp(){
    
}
  closeAlert() {
   
}
}