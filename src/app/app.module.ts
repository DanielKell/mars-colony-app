import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { RegisterComponent } from './components/register/register.component';
import { EncountersComponent } from './components/encounters/encounters.component';
import { ReportComponent } from './components/report/report.component';

import {appRoutes} from './app.routes';
import { NotfoundComponent } from './components/notfound/notfound.component';

@NgModule({ //Below is the metadata, in arrays
  declarations: [ //Here we define which of these arrays belong to this module
    AppComponent,
    WelcomeComponent,
    RegisterComponent,
    EncountersComponent,
    ReportComponent,
    NotfoundComponent
  ],
  imports: [ //Here we define all external modules we want to apply to our declared modules
    BrowserModule, //This should be included for all browser based apps, and it provides error handling
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpModule // For pulling data from the server

  ],
  providers: [], //For services
  bootstrap: [AppComponent] //This defines the startup array of the application
})
export class AppModule { }
