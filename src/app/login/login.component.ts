import { Component, OnInit } from "@angular/core";
import { Loginservice } from "./Loginservice";
import {Globals} from "../globals";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  constructor(public loginservice: Loginservice, public globals : Globals) {}
  name = "";
  password = "";
  
  signIn() {
    var data = {
      name: this.name,
      password: this.password
    };
      this.loginservice.signIn(data).then(response => {
        if(response != null)
        {
          this.setGlobals(response);
        }
    });
  }

  private setGlobals(response) {
    this.globals.userId = response.data.userId;
    this.globals.userName = response.data.name;
  }

  ngOnInit() {}
}
