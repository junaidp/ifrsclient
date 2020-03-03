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
  
  constructor(public globals: Globals ,public authService: AuthService ,private router: Router) {
   
  }
  name = localStorage.getItem('name');
  userId = localStorage.getItem('userId');
  

  ngOnInit() {
  alert(this.userId)
  alert(this.name)
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
    this.router.navigate(['/login']);
  }
}
