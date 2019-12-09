import { Component, OnInit } from "@angular/core";
import { Accuredliabilityservice } from "./AccuredliabilityService";
import { Globals } from "../globals";
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ViewChild, ElementRef } from '@angular/core';
import { allResolved } from "q";

@Component({
  selector: "app-accuredliability",
  templateUrl: "./accuredliability.component.html",
  styleUrls: ["./accuredliability.component.css"]
})
export class AccuredliabilityComponent implements OnInit {
   constructor(public accuredliabilityservice: Accuredliabilityservice, public globals: Globals, private router: Router) {}
 

   
   ngOnInit() {

     }
 
    SignUp(){
    
}
  closeAlert() {
   
}
}