import { Component, OnInit } from '@angular/core';
import {Globals} from "../globals";
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  id: string;
  constructor(public globals : Globals,private router: Router,public authService: AuthService) { 
    if(localStorage.getItem('name') == null && localStorage.getItem('pass') == null ){
      this.router.navigate(['/login']);
      
    }
  
  }
  myClickFunction(event) { 
    //just added console.log which will display the event details in browser on click of the button.
    alert("Button is clicked");
    
    
 }
  ngOnInit() {
    this.id = localStorage.getItem('token');
  }
  logout(): void {
    console.log("Logout");
    this.authService.logout();
    localStorage.removeItem('name')
    localStorage.removeItem('pass')
    this.router.navigate(['/login']);
  }
}
