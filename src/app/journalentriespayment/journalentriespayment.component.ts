import { Component, OnInit } from "@angular/core";
import { JournalentriespaymentService } from "./JournalentriespaymentService";
import { Globals } from "../globals";
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ViewChild, ElementRef } from '@angular/core';
import { allResolved } from "q";

@Component({
  selector: "app-Journalentriespayment",
  templateUrl: "./journalentriespayment.component.html",
  styleUrls: ["./journalentriespayment.component.css"]
})
export class JournalentriespaymentComponent implements OnInit {
   constructor(public journalentriespaymentservice: JournalentriespaymentService, public globals: Globals, private router: Router) {}
 

   
   ngOnInit() {

     }
 
    SignUp(){
    
}
  closeAlert() {
   
}
}