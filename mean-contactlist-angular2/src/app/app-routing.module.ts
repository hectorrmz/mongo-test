import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SupervisorsComponent } from './supervisors/supervisors.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContactListComponent } from './contacts/contact-list/contact-list.component';
import { ServiceComponent } from './service/service.component';

const routes: Routes = [
  { path: 'supervisores', component: SupervisorsComponent },
  { path: 'contactos', component: ContactListComponent },
  { path: 'servicios', component: ServiceComponent },
  { path: '', component: DashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
