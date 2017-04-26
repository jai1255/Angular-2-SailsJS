import { NgModule }       from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {AppRoutingModule, routingComponents}from './app.routing';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ApplicantDataCreateService} from './Services/applicant.service';
import {ApplicantMailService} from './Services/applicant.mail.service';
import {TestComponent} from './test.component';
import {ContactComponent} from './contact.component';


@NgModule({
    declarations: [AppComponent,ContactComponent,routingComponents,TestComponent],
    imports:      [BrowserModule, HttpModule,NgbModule.forRoot(),FormsModule,RouterModule,AppRoutingModule],
    bootstrap:    [AppComponent],
  providers:[ApplicantDataCreateService,ApplicantMailService]
})
export class AppModule {}
