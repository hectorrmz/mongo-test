import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactDetailsComponent } from './contacts/contact-details/contact-details.component';
import { ContactListComponent } from './contacts/contact-list/contact-list.component';
import { SupervisorsComponent } from './supervisors/supervisors.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ModalComponent } from './modal/modal.component';
import { SupervisorFormComponent } from './supervisors/supervisor-form/supervisor-form.component';

import { SupervisorService } from './services/supervisors.service';
import { ServiceComponent } from './service/service.component';
import { ServiceFormComponent } from './service/service-form/service-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactDetailsComponent,
    ContactListComponent,
    SupervisorsComponent,
    DashboardComponent,
    ModalComponent,
    SupervisorFormComponent,
    ServiceComponent,
    ServiceFormComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    MatTableModule,
    MatCheckboxModule,
  ],
  providers: [SupervisorService],
  bootstrap: [AppComponent],
})
export class AppModule {}
