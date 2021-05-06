import { Component, OnInit } from '@angular/core';
import { Globals } from "../globals";
import { LeaseService } from "../new-lease/leaseService";
import { rightService } from "./rightService";
import { ThrowStmt } from '@angular/compiler';
import { JsonPipe, KeyValue } from '@angular/common';
import { NgxSpinnerService } from "ngx-spinner";
import { DisplayError } from "../displayError";
import {
  Router,
  NavigationExtras
} from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-dgmodificationreportslist',
  templateUrl: './dgmodificationreportslist.component.html',
  styleUrls: ['./dgmodificationreportslist.component.css']
})
export class DgmodificationreportslistComponent implements OnInit {

  //mapIndividualUserDetails: Map<String, String>;
  constructor(public rightService: rightService, private router: Router,  public leaseService: LeaseService, public globals: Globals, private spinner: NgxSpinnerService, public displayError: DisplayError) { }
 
  leaseName = "All";
  lessorName = "All";
  classOfAsset = "All";
  location = "All";
  assetCode="All";
  leaseContractNo = "All";

  mapUserData: Map<string, Map<string, string>>;
  mapUserFilter: Map<string, Map<string, string>>;
  mapClassOfAssetFilter: Map<string, string>
  mapLessorNameFilter: Map<string, string>
  mapContractReferenceFilter: Map<String, String>

 


  ngOnInit() {
    var me = this;
    this.getFilterUserData();
    this.getClassOfAssetFilterData();
    this.getLessorFilterData();
    this.getReferenceNoFilterData();


    $('#example tbody').on('click', 'tr', function () {
      var dataId = $(this).attr('id');
      me.router.navigate(['/derecognitionJounrnalentries/'], { state: { dataId: dataId } });
    });
  }




  public getFilterUserData() {
    this.spinner.show();
    var data = {
      leaseName: this.leaseName,
      lessorName: this.lessorName,
      classOfAsset: this.classOfAsset,
      location: this.location,
      assetCode: this.assetCode,
      userId: localStorage.getItem('userId'),
      companyId: localStorage.getItem('companyId')
    };
    //  this.spinner.show();
    this.rightService.getReportData(data).then(response => {
      this.spinner.hide();
      this.mapUserData = new Map(Object.entries(response.data));
      console.log(response.data)
    },
      (error): void => {
        //Error callback
        this.spinner.hide();
        this.displayError.displayErrorMessage(error);

      }
    );
  }



  public getClassOfAssetFilterData() {
    var data = {
      filterName: "classOfAsset"
    };
    this.rightService.getFiltersData(data).then(response => {
      this.mapClassOfAssetFilter = new Map(Object.entries(response.data));
      console.log(this.mapClassOfAssetFilter)
    },
      (error): void => {
        //Error callback
        this.spinner.hide();
        this.displayError.displayErrorMessage(error);

      }
    );
  }
  public getLessorFilterData() {
    var data = {
      filterName: "lessorName"
    };
    this.rightService.getFiltersData(data).then(response => {
      this.mapLessorNameFilter = new Map(Object.entries(response.data));
      console.log(this.mapLessorNameFilter)
    },
    (error): void => {
      //Error callback
      this.spinner.hide();
      this.displayError.displayErrorMessage(error);

    }
    );
  }

  public getReferenceNoFilterData() {
    var data = {
      filterName: "leaseContractNo"
    };
    this.rightService.getFiltersData(data).then(response => {
      this.mapContractReferenceFilter = new Map(Object.entries(response.data));
      console.log(this.mapLessorNameFilter)
    },
    (error): void => {
      //Error callback
      this.spinner.hide();
      this.displayError.displayErrorMessage(error);

    }
    );
  }


  private openUserDetailModal(me: this) {
    $("#dataListUl").on("click", ".dataListLi", function (event) {
      me.spinner.show();
      var dataId = $(this).attr('id');
      var data = {
        dataId: dataId
      };
      
      me.spinner.hide();

    });
  }


  originalOrder = (a: KeyValue<string, Map<string, string>>, b: KeyValue<string, Map<string, string>>): number => {
    return 0;
  }

}

