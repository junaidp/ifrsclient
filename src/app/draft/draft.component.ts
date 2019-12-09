import { Draftservice } from "./Draftservice";
import { Globals } from "../globals";
import { Component, OnInit } from "@angular/core";
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';





@Component({
  selector: "app-draft",
  templateUrl: "./draft.component.html",
  styleUrls: ["./draft.component.css"]
})
export class DraftComponent implements OnInit {
   constructor(public draftservice: Draftservice, public globals: Globals, private router: Router) {}
 

   
   ngOnInit() {

     }
 
    SignUp(){
    
}
  closeAlert() {
   
}
}


