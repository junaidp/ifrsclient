import { Component, OnInit } from "@angular/core";
import { firsttimeadoptionreportingperiodservice } from "./firsttimeadoptionreportingperiod.componentservice";import { Globals } from "../globals";
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ViewChild, ElementRef } from '@angular/core';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-firsttimeadoptionreportingperiod',
  templateUrl: './firsttimeadoptionreportingperiod.component.html',
  styleUrls: ['./firsttimeadoptionreportingperiod.component.css']
})
 export class FirsttimeadoptionreportingperiodComponent implements OnInit {
  isLoggedIn = true;
  constructor(public firsttimeadoptionreportingperiodservice: firsttimeadoptionreportingperiodservice, public globals: Globals, private router: Router, public authService: AuthService) { }
  returnUrl: string;
  name = "";
  password = "";

  formdata() {
    var data = {
    
  };
  this.firsttimeadoptionreportingperiodservice.formdata(data).then(response => {
 
  });

  }

  

  ngOnInit() {
    

  }
 
  
  closeAlert() {
  this.isLoggedIn = true
  }
}


