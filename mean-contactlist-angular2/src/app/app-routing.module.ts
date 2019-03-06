import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SupervisorsComponent } from './supervisors/supervisors.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContactListComponent } from './contacts/contact-list/contact-list.component';

const routes: Routes = [
  { path: 'supervisores', component: SupervisorsComponent },
  { path: 'contactos', component: ContactListComponent },
  { path: '', component: DashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
