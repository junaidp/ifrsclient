import { Component, OnInit } from "@angular/core";
import { DraftService } from "./DraftService";
import { Globals } from "../globals";
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ViewChild, ElementRef } from '@angular/core';
import { allResolved } from "q";


@Component({
  selector: "app-draft",
  templateUrl: "./draft.component.html",
  styleUrls: ["./draft.component.css"]
})
export class DraftComponent implements OnInit {
   constructor(public draftservice: DraftService, public globals: Globals, private router: Router) {}
 

   
   ngOnInit() {

     }
 
    SignUp(){
    
}
  closeAlert() {
   
}
}


