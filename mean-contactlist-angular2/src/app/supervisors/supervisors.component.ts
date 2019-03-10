import { Component, OnInit, ViewChild } from '@angular/core';
import { Supervisor } from '../models/supervisor';
import { SupervisorService } from '../services/supervisors.service';
import { ModalComponent } from '../modal/modal.component';
import swal from 'sweetalert';

@Component({
  selector: 'app-supervisors',
  templateUrl: './supervisors.component.html',
  styleUrls: ['./supervisors.component.scss']
})
export class SupervisorsComponent implements OnInit {
  @ViewChild('supervisorModal') supervisorModal: ModalComponent;
  displayedColumns: string[] = ['name', 'phone', 'services', 'actions'];
  supervisors: Supervisor[] = [];

  constructor(private supervisorService: SupervisorService) {}

  ngOnInit() {
    this.loadSupervisors();
  }

  editSupervisor(element) {
    console.log(element);
  }
  deleteSupervisor(id: string) {
    swal({
      title: 'Delete Supervisor',
      text: 'Are you sure you want to delete this entry?',
      icon: 'warning',
      buttons: ['Cancelar', 'Ok'],
      dangerMode: true
    }).then(willDelete => {
      if (willDelete) {
        this.supervisorService.deleteSupervisor(id).subscribe(() => {
          this.loadSupervisors();
        });
      }
    });
  }

  onSupervisorSaved(_supervisor: Supervisor) {
    this.loadSupervisors();
    this.supervisorModal.closeModal();
  }

  private loadSupervisors() {
    this.supervisorService.getSupervisors().subscribe(res => {
      this.supervisors = res;
    });
  }
}
