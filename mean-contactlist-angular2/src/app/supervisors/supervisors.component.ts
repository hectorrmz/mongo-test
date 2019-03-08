import { Component, OnInit } from '@angular/core';
import { Supervisor } from '../models/supervisor';
import { SupervisorService } from '../services/supervisors.service';

const ELEMENT_DATA: Supervisor[] = [
  { name: 'Nombre 1', phone: 'phone 1', services: 0, workers: 0 },
  { name: 'Nombre 1', phone: 'phone 1', workers: 0 },
  { name: 'Nombre 1', phone: 'phone 1', workers: 0 },
  { name: 'Nombre 1', phone: 'phone 1' },
  { name: 'Nombre 1', phone: 'phone 1', workers: 0 },
  { name: 'Nombre 1', phone: 'phone 1' },
  { name: 'Nombre 1', phone: 'phone 1' },
  { name: 'Nombre 1', phone: 'phone 1', workers: 0 },
  { name: 'Nombre 1', phone: 'phone 1' },
  { name: 'Nombre 1', phone: 'phone 1' },
  { name: 'Nombre 1', phone: 'phone 1' },
  { name: 'Nombre 1', phone: 'phone 1' },
  { name: 'Nombre 1', phone: 'phone 1', workers: 0 },
];

@Component({
  selector: 'app-supervisors',
  templateUrl: './supervisors.component.html',
  styleUrls: ['./supervisors.component.scss'],
})
export class SupervisorsComponent implements OnInit {
  displayedColumns: string[] = ['name', 'phone', 'actions'];
  dataSource = ELEMENT_DATA;

  constructor(private supervisorService: SupervisorService) {}

  ngOnInit() {
    this.supervisorService.getSupervisors().subscribe(res => {
      console.log(res);
    });
  }

  editSupervisor(element) {
    console.log(element);
  }
}
