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
import { FirsttimeadoptionreportingperiodComponent } from './firsttimeadoptionreportingperiod/firsttimeadoptionreportingperiod.component';

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
    FirsttimeadoptionreportingperiodComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
  ],
  providers: [
    Globals
  ],
  bootstrap: [AppComponent],
  
})
export class AppModule { 
  
}
