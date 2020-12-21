import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";


@Component({
  selector: 'app-requeestApproved',
  templateUrl: './requeestApproved.component.html',
  styleUrls: ['./requeestApproved.component.css']
})

export class RequeestApprovedComponent implements OnInit {
  userId = ""
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    console.log(this.route.snapshot.paramMap)
    this.userId = this.route.snapshot.paramMap.get("id")
    alert(this.userId)
    $( document ).ready(function() {
     
      $('#mainNavBar').hide();
    });
  }
  

}
