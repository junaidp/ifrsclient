import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewLeaseComponent } from './new-lease/new-lease.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guarrd'
import { JournalEntriesComponent } from './journal-entries/journal-entries.component'
import {ReportsComponent } from './reports/reports.component'
import { FirsttimeadoptionComponent } from './firsttimeadoption/firsttimeadoption.component'


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'journalEntries', component: JournalEntriesComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full', canActivate: [AuthGuard] },
  { path: 'newlease', component: NewLeaseComponent },
  { path: 'firsttimeadoption', component: FirsttimeadoptionComponent },
  { path: 'reports', component: ReportsComponent }

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],

})
export class AppRoutingModule { }
