import { Component, OnInit } from "@angular/core";
import { LeaseliabilityService } from "./LeaseliabilityService";
import { Globals } from "../globals";
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ViewChild, ElementRef } from '@angular/core';
import { allResolved } from "q";

@Component({
  selector: "app-leaseliability",
  templateUrl: "./leaseliability.component.html",
  styleUrls: ["./leaseliability.component.css"]
})
export class LeaseliabilityComponent implements OnInit {
   constructor(public leaseliablilityservice: LeaseliabilityService, public globals: Globals, private router: Router) {}
 

   
   ngOnInit() {

     }
 
    SignUp(){
    
}
  closeAlert() {
   
}
}