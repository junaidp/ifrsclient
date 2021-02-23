import { Component, OnInit } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Component({
  selector: 'app-selectjournalentries',
  templateUrl: './selectjournalentries.component.html',
  styleUrls: ['./selectjournalentries.component.css']
})
export class SelectjournalentriesComponent implements OnInit {

  constructor(private router: Router) { }

  clickJournal() {
    //just added console.log which will display the event details in browser on click of the button.

    //if (this.globals.selectedJournal == "/journalEntries") {

      this.router.navigate(['/journalEntries']);
   // }
    // if (this.globals.selectedJournal == "/journalEntriesfta") {
    //   this.router.navigate(['/journalEntriesfta']);
    // }
  }

  ngOnInit() {
  }

}
