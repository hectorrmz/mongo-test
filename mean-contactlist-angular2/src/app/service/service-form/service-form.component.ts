import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Service } from 'src/app/models/service';
import { ServiceService } from 'src/app/services/services.service';
import { SupervisorService } from 'src/app/services/supervisors.service';
import { Supervisor } from 'src/app/models/supervisor';

@Component({
  selector: 'app-service-form',
  templateUrl: './service-form.component.html',
  styleUrls: ['./service-form.component.scss']
})
export class ServiceFormComponent implements OnInit {
  @Output() serviceSaved: EventEmitter<Service> = new EventEmitter();
  service: Service = {};
  supervisors: Supervisor[];
  schedules = [
    { name: 'Matutino', checked: false, max: null },
    { name: 'Vespertino', checked: false, max: null },
    { name: 'Nocturno', checked: false, max: null }
  ];

  constructor(
    private serviceService: ServiceService,
    private supervisorService: SupervisorService
  ) {}

  ngOnInit() {
    this.loadSupervisors();
    this.service = {
      positions: [{ name: '', salary: null }]
    };
  }

  createService() {
    this.service.schedules = [];

    this.schedules.forEach(item => {
      if (item.checked) {
        this.service.schedules.push({ name: item.name, maxWorkers: item.max });
      }
    });

    this.serviceService.createService(this.service).subscribe(service => {
      this.serviceSaved.emit(service);
    });
  }

  addNewPosition() {
    this.service.positions.push({ name: '', salary: null });
  }

  deletePosition(index: number) {
    this.service.positions.splice(index, 1);
  }

  private loadSupervisors() {
    this.supervisorService.getSupervisors().subscribe(supervisors => {
      this.supervisors = supervisors;
    });
  }
}
