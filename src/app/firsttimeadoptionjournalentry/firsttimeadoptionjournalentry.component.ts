import { Component, OnInit } from "@angular/core";
import { FirsttimeadoptionjournelentryService } from "./FirsttimeadoptionjournelentryService";
import { Globals } from "../globals";
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ViewChild, ElementRef } from '@angular/core';
import { allResolved } from "q";

@Component({
  selector: "app-firsttimeadoptionjournalentry",
  templateUrl: "./firsttimeadoptionjournalentry.component.html",
  styleUrls: ["./firsttimeadoptionjournalentry.component.css"]
})           
export class FirsttimeadoptionjournalentryComponent implements OnInit {
   constructor(public firsttimeadoptionjournelentryservice: FirsttimeadoptionjournelentryService, public globals: Globals, private router: Router) {}
 

   
   ngOnInit() {

     }
 
    SignUp(){
    
}
  closeAlert() {
   
}
}