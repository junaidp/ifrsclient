import { Component, OnInit } from '@angular/core';
import {rightOfUseScheduleService} from './rightOfUseScheduleService';
import { NgxSpinnerService } from "ngx-spinner";

import {
  Router,
  NavigationExtras
} from '@angular/router';
@Component({
  selector: 'app-rightofuseschedule',
  templateUrl: './rightofuseschedule.component.html',
  styleUrls: ['./rightofuseschedule.component.css']
})

export class RightofusescheduleComponent implements OnInit {
  mapIndividualSchedule: Map<string, Map<string, string>>;
  constructor(private router: Router , private rightOfUseScheduleService: rightOfUseScheduleService , private spinner: NgxSpinnerService) {
    
      var id = this.router.getCurrentNavigation().extras.state.dataId;
      console.log(id);
      var data = {
  
        dataId: id,
      };
      this.spinner.show();
  
  
      // alert("calculation for " + this.globals.userName)
      this.rightOfUseScheduleService.calculate(data).then(response => {
        this.spinner.hide();
        this.mapIndividualSchedule = new Map(Object.entries(response.data));
        console.log(this.mapIndividualSchedule)
        // console.log(response.data)
        // this.map1 = this.map.get("17");
        // this.presentValue = this.map1[9];
        // //     alert(this.presentValue)
        // this.globals.presentValue = this.presentValue
        /*console.log("In MAP ENTRIES");
  
        this.map.forEach((value: Map<string, string>, key: string) => {
          for (var key in value) {
            if (value.hasOwnProperty(key)) {
              console.log(key + " -> " + value[key]);
            }
          }
        });*/
      });
  
  
  
  
  
    


   }

  ngOnInit() {
  }

}
