import { Component, OnInit } from "@angular/core";
import { Loginservice } from "./Loginservice";
import {Globals} from "../globals";
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';




@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  constructor(public loginservice: Loginservice, public globals : Globals,private router: Router) {}
  
  name="";
  password="";
  
  signIn() {
    var data = {
      name: this.name,
      password: this.password
    };
      this.loginservice.signIn(data).then(response => {
       
        if(data.name !=''&&  data.name == "shehryar" && data.password == "password")
        { alert("successful login")
          this.router.navigate(['/home']);
          this.setGlobals(response);
        }
        
        else if(data.name =='') {
          alert("Please Enter User and Pasword")
          interface Alert {
            type: string;
            message: string;
          }
          const ALERTS: Alert[] = [{
            type: 'success',
            message: 'This is an success alert',
          }];
          alert("Please Enter Udddser and Pasword")

        }
        else {
          alert("wrong Username or password")
        }
    });
  }

  private setGlobals(response) {
    this.globals.userId = response.data.userId;
    this.globals.userName = response.data.name;
  }
  
  ngOnInit() {}
}


