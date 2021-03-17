import { Component, OnInit } from '@angular/core';
import { rightService } from "src/app/right-of-use/rightService";
import { Globals } from "../globals";
import { LeaseService } from '../new-lease/leaseService';
import { NgxSpinnerService } from "ngx-spinner";
import {
  Router,
  NavigationExtras
} from '@angular/router';
import { single } from 'rxjs/operators';

declare var $: any;
@Component({
  selector: 'app-rightofusescheduleleases',
  templateUrl: './rightofusescheduleleases.component.html',
  styleUrls: ['./rightofusescheduleleases.component.css']
})
export class RightofusescheduleleasesComponent implements OnInit {
  mapUserData: Map<string, Map<string, string>>;
  mapUserFilter: Map<string, Map<string, string>>;

  

  leaseName = "";
  lessorName = "";
  classOfAsset = "";
  location  = "";
  date = "";
  vendorName = "";
  startingDate = "";
  endingDate = "";
  quickReport = "";
  userId ;
  companyId ;
  finalDate ;
  dateSelectorMonth;

  sumOfNVBOpeningFinal ;
  sumOFNVBClosingFinal;
  sumOfDepreciationiFnal;
  mapRightReport: Map<string, Map<string, string>>;
  mapRow: Map<string , string>
  map: Map<string, Map<string, string>>;
  constructor( public globals: Globals,public rightService: rightService, private router: Router, public leaseService: LeaseService,  private spinner: NgxSpinnerService) { }

  public getFilterUserData() {
    //  this.spinner.show();
    //  alert(this.leaseName);
    //  alert(this.lessorName);
    //  alert(this.classOfAsset);
    //  alert(this.location);
    //  alert(this.startingDate);
    //  alert(this.endingDate);
    //  alert(this.vendorName);
    //  alert(this.quickReport);
     var data = {
      leaseName: this.leaseName ,
      lessorName: this.lessorName,
      classOfAsset: this.classOfAsset,
      userId: localStorage.getItem('userId'),
      companyId: localStorage.getItem('companyId'),
      location: this.location,
      quickReport: this.quickReport,
      startingDate: this.startingDate,
      endingDate: this.endingDate
      //date: this.date
    };
    //  this.spinner.show();
     alert(JSON.stringify(data));
     this.rightService.getReportData(data).then(response => {
      alert(response.data)
      this.mapUserData = new Map(Object.entries(response.data));
      console.log(response.data)
   });

    }



    public getFilterUserDataScheduleReport() {
      this.spinner.show();
  
  
      this.userId = localStorage.getItem('userId');
      this.companyId = localStorage.getItem('companyId');
  
      if(this.userId === "undefined"){
        this.userId = 0;
      }
      var ret = ($('#dateSelector').val().split("-"));
     
      var day = 10;
      var year = ret[0];
      var month = ret[1];
    
  
      this.finalDate =  (30 +"-" +month + "-" + year)
      this.dateSelectorMonth = month
      var data = {
        userId: this.userId,
        companyId: this.companyId,
        year: year,
        month: month
      };
     // alert(JSON.stringify(data))
 

      this.leaseService.calculateFtaSum(data).then(response => {
        this.mapRightReport = new Map(Object.entries(response.data));
        this.spinner.hide();
        console.log(this.mapRightReport)
      //   for (let [key, value] of this.mapRightReport.entries()) {
      //     console.log(key, value);
      // }
      var sumOfNVBOpening  =0;
      var sumOFNVBClosing = 0;
      var sumOfDepreciation = 0;
      
        $.each(response.data, function (index) {

          this.map = new Map(Object.entries(response.data[index]));
          var nvbDepreciation =0;
          var nvbOpening = 0;
          var nvbClosing  =0;

          nvbOpening = this.map.get('16');
          nvbOpening = Math.round(nvbOpening)
          nvbDepreciation = this.map.get('17');
          nvbDepreciation = Math.round(nvbDepreciation)
          nvbClosing  = this.map.get('18');
          nvbClosing = Math.round(nvbClosing);


        //  alert(nvbOpening + "open" + nvbClosing  + "closing "   +  nvbDepreciation + "dep")
          sumOfNVBOpening  += (nvbOpening);
          sumOfDepreciation += nvbDepreciation
          sumOFNVBClosing += nvbClosing

        //  alert(sumOfNVBOpening + "sumofope" +  sumOfDepreciation + "dep"   +  sumOFNVBClosing)
         
        });
        this.sumOfNVBOpeningFinal = parseInt(sumOfNVBOpening+"")
        this.sumOfDepreciationiFnal = parseInt(sumOfDepreciation+"")
        this.sumOFNVBClosingFinal = parseInt(sumOFNVBClosing+"")

       // console.log(this.sumOfNVBOpeningFinal + "op"  + this.sumOfDepreciationiFnal + "dep" + this.sumOFNVBClosingFinal )
      });
  
      
      function calculateMonth(monthService) {
        if (monthService.toLowerCase() == "Jan".toLowerCase()) {
          return "01"
        }
        if (monthService.toLowerCase() == "Feb".toLowerCase()) {
          return "02"
        }
        if (monthService.toLowerCase() == "Mar".toLowerCase()) {
          return "03"
        }
        if (monthService.toLowerCase() == "Apr".toLowerCase()) {
          return "04"
        }
        if (monthService.toLowerCase() == "May".toLowerCase()) {
          return "05"
        }
        if (monthService.toLowerCase() == "Jun".toLowerCase()) {
          return "06"
        }
        if (monthService.toLowerCase() == "Jul".toLowerCase()) {
          return "07"
        }
        if (monthService.toLowerCase() == "Aug".toLowerCase()) {
          return "08"
        }
        if (monthService.toLowerCase() == "Sep".toLowerCase()) {
          return "09"
        }
        if (monthService.toLowerCase() == "Oct".toLowerCase()) {
          return "10"
        }
        if (monthService.toLowerCase() == "Nov".toLowerCase()) {
          return "11"
        }
        if (monthService.toLowerCase() == "Dec".toLowerCase()) {
          return "12"
        }
  
      }
  
    }

  ngOnInit() {
    var me = this;

    $("#rightScheduleUl").on("click", ".rightScheduleLi", function (event) {
      //  me.spinner.show();
        var dataId = $(this).attr('id');
        var data = {
          dataId: dataId
        };
        me.router.navigate(['/rightofuseschedule/'], { state: { dataId: dataId } });
      });

    var data = {};
    this.rightService.getUsersData(data).then(response => {
      this.mapUserData = new Map(Object.entries(response.data));
      this.mapUserFilter = new Map(Object.entries(response.data));
      console.log(response.data)
    });   
  }
}
