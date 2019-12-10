import { Component, OnInit } from "@angular/core";
import { NewLeasejournalentryService } from "./NewLeasejournalentryService";
import { Globals } from "../globals";
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ViewChild, ElementRef } from '@angular/core';
import { allResolved } from "q";

@Component({
  selector: "app-newLeasejournalentry",
  templateUrl: "./newLeasejournalentry.component.html",
  styleUrls:  ["./newLeasejournalentry.component.css"]
})
export class NewLeasejournalentryComponent implements OnInit {
   constructor(public newLeasejournalentryservice: NewLeasejournalentryService, public globals: Globals, private router: Router) {}
 

   
   ngOnInit() {

     }
 
    SignUp(){
    
}
  closeAlert() {
   
}
}