import { Component, OnInit } from '@angular/core';
import { ShowUserService } from "./showUserService";
import { Globals } from "../globals";
import { DisplayError } from "../displayError";


import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-show-users',
  templateUrl: './show-users.component.html',
  styleUrls: ['./show-users.component.css']
})
export class ShowUsersComponent implements OnInit {

  constructor(public ShowUserService: ShowUserService, public displayError: DisplayError
    , public globals: Globals, private router: Router) { }

  map: Map<string, Map<string, string>>;

  map1: Map<String, String>;

  //for dr
  commencementDate: String;

  presentValue: number;

  ngOnInit() {
    var me = this
    $('#editUserTable tbody').on('click', '.editUser2', function () {
      var userId = $(this).attr('id');
      alert(userId)

      var data = {
        userId: userId
      };
      //alert(data)
      me.ShowUserService.deleteSelectedUser(data).then(response => {
        alert(response.data)

      });
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
    },
      (error): void => {
        //Error callback
      //  this.spinner.hide();
        this.displayError.displayErrorMessage(error);

      });
  }

}
