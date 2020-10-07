import { Component, OnInit } from "@angular/core";
import { Globals } from "../globals";
import { AuthService } from '../auth.service';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';


@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})


export class NavbarComponent implements OnInit {
  addUSerOption = false;
  
  constructor(public globals: Globals ,public authService: AuthService ,private router: Router) {
  
  }
  name = localStorage.getItem('name');
  userId = localStorage.getItem('userId');
  

  ngOnInit() {
    alert(localStorage.getItem('userType') +"ss")
    
    if(localStorage.getItem('userType') == "company" ){
      alert('cpom')
      this.addUSerOption = true;
      
      
    }
    else{
      this.addUSerOption = false;
      alert("false")
    }
    (function() {
      var myDiv = document.getElementById("overlaylogin"),

          showww = function() {
              myDiv.style.display = "block";
              setTimeout(hide, 2000); // 5 seconds
          },

          hide = function() {
              myDiv.style.display = "none";
          };

      showww();
  })();
  }
  

  ngDoCheck(): void {
    if (this.name != this.globals.userName) {
      // this.name = this.globals.userName;
      this.name = localStorage.getItem('name')
    }

  }
  logout(): void {
    console.log("Logout");
    this.authService.logout();
    localStorage.removeItem('name')
    localStorage.removeItem('pass')
    this.router.navigate(['/landing']);
  }
}
