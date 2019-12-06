import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewLeaseComponent } from './new-lease/new-lease.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guarrd'
import { SignupComponent } from './signup/signup.component';
import { JournalEntriesComponent } from './journal-entries/journal-entries.component'
import { ReportsComponent } from './reports/reports.component'
import { FirsttimeadoptionComponent } from './firsttimeadoption/firsttimeadoption.component'
import { FirsttimeadoptionreportingperiodComponent } from './firsttimeadoptionreportingperiod/firsttimeadoptionreportingperiod.component'
import { PaymentReportComponent } from './payment-report/payment-report.component'
import { RightOfUseComponent } from './right-of-use/right-of-use.component'
import { LeaseReportComponent } from './lease-report/lease-report.component'
import { SelectReportComponent } from './select-report/select-report.component'

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'journalEntries', component: JournalEntriesComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full', canActivate: [AuthGuard] },
  { path: 'newlease', component: NewLeaseComponent },
  { path: 'firsttimeadoption', component: FirsttimeadoptionComponent },
  { path: 'reports',  component: ReportsComponent, 
  children: [
    { path: '', component: SelectReportComponent },
    { path: 'leasereport', component: LeaseReportComponent },
    { path: 'paymentreport', component: PaymentReportComponent },
    { path: 'rightofuse', component: RightOfUseComponent }
   
  ]
},

  { path: 'signup', component: SignupComponent },
  { path: 'firsttimeadoptionreportingperiod', component: FirsttimeadoptionreportingperiodComponent },


];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],

})
export class AppRoutingModule { }
