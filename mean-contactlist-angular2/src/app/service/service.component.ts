import { Component, OnInit, ViewChild } from '@angular/core';
import { Service } from '../models/service';
import { ServiceService } from '../services/services.service';
import { ModalComponent } from '../modal/modal.component';
import swal from 'sweetalert';
@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {
  @ViewChild('serviceModal') serviceModal: ModalComponent;
  displayedColumns: string[] = [
    'name',
    'supervisor',
    'schedule',
    'payment',
    'actions'
  ];
  services: Service[] = [];

  constructor(private serviceService: ServiceService) {}

  ngOnInit() {
    this.loadServices();
  }

  deleteService(id) {
    swal({
      title: 'Delete Service',
      text: 'Are you sure you want to delete this entry?',
      icon: 'warning',
      buttons: ['Cancelar', 'Ok'],
      dangerMode: true
    }).then(willDelete => {
      if (willDelete) {
        this.serviceService.deleteService(id).subscribe(() => {
          this.loadServices();
        });
      }
    });
  }

  onServiceSaved(_service: Service) {
    this.loadServices();
  }

  private loadServices() {
    this.serviceService.getservices().subscribe(services => {
      this.services = services;
    });
  }
}
