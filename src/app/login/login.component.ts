import { Component, OnInit } from '@angular/core';
import{ Loginservice }from "./Loginservice";



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  constructor(public loginservice: Loginservice) {}
   userName= "Shehryar";
   Password= "password";


   calculate() {
    var data ={
      "name":"shehryar",
      "password":"password"
  };
  
  this.loginservice.calculate(data).then(response => {
    var obj = JSON.parse(response.data);
         alert(obj.name);
   });
  }
  

   
  ngOnInit() {

    
  }

}
