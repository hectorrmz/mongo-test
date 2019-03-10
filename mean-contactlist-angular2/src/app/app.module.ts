import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//Angular Material Components
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatExpansionModule } from '@angular/material/expansion';

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
import { ServiceService } from './services/services.service';
import { WorkersComponent } from './workers/workers.component';
import { WorkerFormComponent } from './workers/worker-form/worker-form.component';
import { WorkerService } from './services/workers.service';
import { MatNativeDateModule } from '@angular/material/core';

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
    WorkersComponent,
    WorkerFormComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MatTableModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatAutocompleteModule,
    MatExpansionModule
  ],
  providers: [
    MatDatepickerModule,
    SupervisorService,
    ServiceService,
    WorkerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
