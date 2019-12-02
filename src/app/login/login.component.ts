import { Component, OnInit } from "@angular/core";
import { Loginservice } from "./Loginservice";
import { Globals } from "../globals";
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../auth.service';
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  constructor(public loginservice: Loginservice, public globals: Globals, private router: Router, public authService: AuthService) { }
  returnUrl: string;
  name = "";
  password = "";

  signIn() {


  }

  private setGlobals(response) {
    this.globals.userId = response.data.userId;
    this.globals.userName = response.data.name;
  }

  ngOnInit() {
    this.returnUrl = '/home';
    this.authService.logout();
  }
  login() {
    var data = {
      name: this.name,
      password: this.password
    };
    this.loginservice.signIn(data).then(response => {
      alert(JSON.stringify(response.data))
      if (data.name == "shehryar" && data.password == "password") {
        alert("successful login")

        this.setGlobals(response);
        localStorage.setItem('isLoggedIn', "true");
        localStorage.setItem('name', data.name);
        localStorage.setItem('pass', data.password);

        this.router.navigate([this.returnUrl]);
      }

      else if (data.name == '') {
        alert("Please Enter User and Pasword")

      }
      else {
        alert("wrong Username or password")

      }
    });
  }
}
