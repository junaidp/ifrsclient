import { Component, OnInit } from "@angular/core";
import { Globals } from "../globals";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  
  constructor(public globals: Globals) {
   
  }
  name = "";

  ngOnInit() {}

  ngDoCheck(): void {
    if (this.name != this.globals.userName) {
      this.name = this.globals.userName;
    }
  }
}
