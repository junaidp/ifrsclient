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
import { Globals } from './globals';
import { JournalEntriesComponent } from './journal-entries/journal-entries.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    NewLeaseComponent,
    LoginComponent,
    JournalEntriesComponent,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule

  ],
  providers: [
    Globals
  ],
  bootstrap: [AppComponent],
  
})
export class AppModule { 
  
}
