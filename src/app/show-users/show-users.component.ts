import { Component, OnInit } from '@angular/core';
import { ShowUserService } from "./showUserService";
import { Globals } from "../globals";
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-show-users',
  templateUrl: './show-users.component.html',
  styleUrls: ['./show-users.component.css']
})
export class ShowUsersComponent implements OnInit {

  constructor(public ShowUserService: ShowUserService, public globals: Globals, private router: Router) { }

  map: Map<string, Map<string, string>>;

  map1: Map<String, String>;

  //for dr
  commencementDate: String;

  presentValue:number;
  
  ngOnInit() {
    $('#editUserTable tbody').on( 'click', '.editUser2', function () {
        alert("td Click");
        alert($(this).attr('id') + "jj");
    });

  
    var data = {

 //     companyId: localStorage.getItem('companyId')
      companyId: '22'
   
   //   year:2019
    };
    console.log(data)
  alert(JSON.stringify(data))
    this.ShowUserService.showUser(data).then(response => {
      this.map = new Map(Object.entries(response.data));
  
  
      console.log(response.data)
      // this.map1 = this.map.get("17");
      // this.presentValue = this.map1[9];
    });
  }

}
