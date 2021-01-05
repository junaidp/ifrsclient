import * as $ from 'jquery';
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
import { JournalEntriesftaComponent } from './journal-entriesfta/journal-entriesfta.component'
import { ReportsComponent } from './reports/reports.component'
import { FirsttimeadoptionComponent } from './firsttimeadoption/firsttimeadoption.component'
import { FirsttimeadoptionreportingperiodComponent } from './firsttimeadoptionreportingperiod/firsttimeadoptionreportingperiodcomponent'
import { FirsttimeadoptioninitialComponent } from './firsttimeadoptioninitial/firsttimeadoptioninitial.component'
import { ShowUsersComponent } from './show-users/show-users.component';
import { PaymentReportComponent } from './payment-report/payment-report.component'
import { RightOfUseComponent } from './right-of-use/right-of-use.component'
import { LeaseReportComponent } from './lease-report/lease-report.component'
import { SelectReportComponent } from './select-report/select-report.component'
import { LandingComponent } from './landing/landing.component'
import { FinanceComponent } from './financecost/financecost.component'
import { LeaseliabilityComponent } from './leaseliability/leaseliability.component';
import { AccuredliabilityComponent } from './accuredliability/accuredliability.component';
import { CashbankComponent } from './cashbank/cashbank.component';
import { DraftComponent } from './draft/draft.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { CompanyloginComponent } from './companylogin/companylogin.component';
import { FirsttimeadoptionjournalentryComponent } from './firsttimeadoptionjournalentry/firsttimeadoptionjournalentry.component';
import { JournalentriespaymentComponent } from './journalentriespayment/journalentriespayment.component';
import { NewLeasejournalentryComponent } from './newLeasejournalentry/newLeasejournalentry.component';
import { PaymentgetwayComponent } from './paymentgetway/paymentgetway.component';
import { PaymentscheduleComponent } from './paymentschedule/paymentschedule.component';
import { FirsttimeadoptionjournalentrycommulativeComponent } from './firsttimeadoptionjournalentrycommulative/firsttimeadoptionjournalentrycommulative.component';
import { ApproverequestComponent } from './approverequest/approverequest.component';
import { RequeestApprovedComponent } from './requeestApproved/requeestApproved.component';
import { RequestApprovedCompanyComponent} from './request-approved-company/request-approved-company.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'landing', component: LandingComponent },
  { path: 'RequeestApproved', component: RequeestApprovedComponent },
  { path: 'requestApprovedCompany', component: RequeestApprovedComponent },
  { path: 'home', component: HomeComponent },
  { path: 'journalEntries', component: JournalEntriesComponent},
  { path: 'journalEntriesfta', component: JournalEntriesftaComponent},
  { path: 'financecost', component: FinanceComponent },
  { path: 'leaseliability', component: LeaseliabilityComponent },
  { path: 'accuredliability', component: AccuredliabilityComponent },
  { path: 'cashbank', component: CashbankComponent },
  { path: 'draft', component: DraftComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'contactus', component: ContactusComponent },
  { path: 'companylogin', component: CompanyloginComponent },
  { path: 'showusers', component: ShowUsersComponent },
  { path: 'firsttimeadoptionreportingperiod/firsttimeadoptionjournalentry', component: FirsttimeadoptionjournalentryComponent },
  { path: 'firsttimeadoptioninitial/firsttimeadoptionjournalentrycommulative', component: FirsttimeadoptionjournalentrycommulativeComponent },

  { path: 'journalentriespayment', component: JournalentriespaymentComponent },
  { path: 'newlease/newleasejournalentry', component: NewLeasejournalentryComponent },
  { path: 'paymentgetway', component: PaymentgetwayComponent },
  { path: 'paymentschedule', component: PaymentscheduleComponent },
  { path: 'approverequest', component: ApproverequestComponent },

  
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
  { path: 'firsttimeadoptioninitial', component: FirsttimeadoptioninitialComponent }
  


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
