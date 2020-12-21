import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { NewLeaseComponent } from './new-lease/new-lease.component';
import { LoginComponent } from './login/login.component';
import { Globals } from './globals'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SignupComponent } from './signup/signup.component';

import { JournalEntriesComponent } from './journal-entries/journal-entries.component';
import { ReportsComponent } from './reports/reports.component';
import { FirsttimeadoptionComponent } from './firsttimeadoption/firsttimeadoption.component'
import { FirsttimeadoptionreportingperiodComponent } from './firsttimeadoptionreportingperiod/firsttimeadoptionreportingperiodcomponent';
import { FirsttimeadoptioninitialComponent } from './firsttimeadoptioninitial/firsttimeadoptioninitial.component';
import { RightOfUseComponent } from './right-of-use/right-of-use.component';
import { PaymentReportComponent } from './payment-report/payment-report.component';
import { LeaseReportComponent } from './lease-report/lease-report.component';
import { SelectReportComponent } from './select-report/select-report.component';
import { LandingComponent } from './landing/landing.component';
import { FinanceComponent } from './financecost/financecost.component';
import { LeaseliabilityComponent } from './leaseliability/leaseliability.component';
import { AccuredliabilityComponent } from './accuredliability/accuredliability.component';
import { CashbankComponent } from './cashbank/cashbank.component';
import { DraftComponent } from './draft/draft.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { CompanyloginComponent } from './companylogin/companylogin.component';
import { FirsttimeadoptionjournalentryComponent } from './firsttimeadoptionjournalentry/firsttimeadoptionjournalentry.component';
import { JournalentriespaymentService } from './journalentriespayment/JournalentriespaymentService';
import { JournalentriespaymentComponent } from './journalentriespayment/journalentriespayment.component';
import { NewLeasejournalentryComponent } from './newLeasejournalentry/newLeasejournalentry.component';
import { PaymentgetwayComponent } from './paymentgetway/paymentgetway.component';
import { PaymentscheduleComponent } from './paymentschedule/paymentschedule.component';
import { AddNewUserComponent } from './add-new-user/add-new-user.component';
import { FirsttimeadoptionjournalentrycommulativeComponent } from './firsttimeadoptionjournalentrycommulative/firsttimeadoptionjournalentrycommulative.component';
import { JournalEntriesftaComponent } from './journal-entriesfta/journal-entriesfta.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { ShowUsersComponent } from './show-users/show-users.component';
import { ApproverequestComponent } from './approverequest/approverequest.component';

@NgModule({
  declarations: [	
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    NewLeaseComponent,
    LoginComponent,
    SignupComponent,
    JournalEntriesComponent,
    ReportsComponent,
    FirsttimeadoptionComponent,
    FirsttimeadoptionreportingperiodComponent,
    FirsttimeadoptioninitialComponent,
    RightOfUseComponent,
    PaymentReportComponent,
    LeaseReportComponent,
    SelectReportComponent,
    LandingComponent,
    FinanceComponent,
    LeaseliabilityComponent,
    AccuredliabilityComponent,
    CashbankComponent,
    DraftComponent,
    AboutusComponent,
    ContactusComponent,
    CompanyloginComponent,
    FirsttimeadoptionjournalentryComponent,
    JournalentriespaymentComponent,
    NewLeasejournalentryComponent,
    PaymentgetwayComponent,
    PaymentscheduleComponent,
    AddNewUserComponent,
    FirsttimeadoptionjournalentrycommulativeComponent,
    JournalEntriesftaComponent,
    ShowUsersComponent,
      ApproverequestComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    NgxSpinnerModule
  ],
  providers: [
    Globals
  ],
  bootstrap: [AppComponent],
  
})
export class AppModule { 
  
}
