import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-requeestApproved',
  templateUrl: './requeestApproved.component.html',
  styleUrls: ['./requeestApproved.component.css']
})
export class RequeestApprovedComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $( document ).ready(function() {
      $('#mainNavBar').hide();
    });
  }

}
