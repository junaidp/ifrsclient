import { Component, OnInit } from '@angular/core';
import { Globals } from "../globals";
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../auth.service';
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  id: string;
  selected = "";
  signUpCompany ; 
  constructor(public globals: Globals, private router: Router, public authService: AuthService) {
    if (localStorage.getItem('name') == null && localStorage.getItem('pass') == null) {
      this.router.navigate(['/landing']);

    }
  }

  clickLease() {
    //just added console.log which will display the event details in browser on click of the button.
    this.selected = "/journalEntries"
    this.globals.selectedJournal = this.selected

  }

  clickAdoption() {
    //just added console.log which will display the event details in browser on click of the button.
    this.selected = "/journalEntriesfta"

    this.globals.selectedJournal = this.selected
  }
  clickJournal() {
    //just added console.log which will display the event details in browser on click of the button.

    if (this.globals.selectedJournal == "/journalEntries") {

      this.router.navigate(['/journalEntries']);
    }
    if (this.globals.selectedJournal == "/journalEntriesfta") {
      this.router.navigate(['/journalEntriesfta']);
    }
  }

  ngOnInit() {
    this.signUpCompany = this.globals.companyId;
debugger
    if(localStorage.getItem('userType') == "company" ){
      $('#company_hidden').hide();
      
    }
    else{
      $('.background_img_etl').hide();
    }
    $('#mainNavBar').show();

    var modal = document.getElementById("myModall");
    var btn = document.getElementById("myBtnn");
    var span = document.getElementsByClassName("close")[0];
    btn.onclick = function() {
      modal.style.display = "block";
    }
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
    this.id = localStorage.getItem('token');
  }
  logout(): void {
    console.log("Logout");
    this.authService.logout();
    localStorage.removeItem('name');
    localStorage.removeItem('pass');
    localStorage.removeItem('id');
    localStorage.removeItem('compayId');
    this.router.navigate(['/login']);
  }
}
