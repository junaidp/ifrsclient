import { Component, OnInit } from "@angular/core";
import { FirsttimeadoptionjournalentryService } from "./FirsttimeadoptionjournalentryService";
import { Globals } from "../globals";
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ViewChild, ElementRef } from '@angular/core';
import { allResolved } from "q";
declare var $: any;
@Component({
  selector: "app-firsttimeadoptionjournalentry",
  templateUrl: "./firsttimeadoptionjournalentry.component.html",
  styleUrls: ["./firsttimeadoptionjournalentry.component.css"]
})           
export class FirsttimeadoptionjournalentryComponent implements OnInit {
   constructor(public firsttimeadoptionjournalentryservice: FirsttimeadoptionjournalentryService, public globals: Globals, private router: Router) {}
 

   
   ngOnInit() {
    $("#journal_entry_show").on("click", function (){
      $("#journal_entry").toggle("show");
      $("#journal_entry1").toggle("show");
  });
     }
 
    SignUp(){
    
}
  closeAlert() {
   
}
}