import { Component, OnInit } from "@angular/core";
import { Loginservice } from "./Loginservice";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  constructor(public loginservice: Loginservice) {}
  name = "shehryar";
  password = "password";

  signIn() {
    alert("in call" + name);
    var data = {
      name: this.name,
      password: this.password
    };

    this.loginservice.signIn(data).then(response => {
      //var obj = JSON.parse(response.data);
      alert(response);
    });
  }

  ngOnInit() {}
}
