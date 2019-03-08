import { Component, OnInit } from '@angular/core';
import { Supervisor } from '../models/supervisor';
import { SupervisorService } from '../services/supervisors.service';

@Component({
  selector: 'app-supervisors',
  templateUrl: './supervisors.component.html',
  styleUrls: ['./supervisors.component.scss'],
})
export class SupervisorsComponent implements OnInit {
  displayedColumns: string[] = ['name', 'phone', 'actions'];
  supervisors: Supervisor[] = [];

  constructor(private supervisorService: SupervisorService) {}

  ngOnInit() {
    this.supervisorService.getSupervisors().subscribe(res => {
      console.log(res);
      this.supervisors = res;
    });
  }

  editSupervisor(element) {
    console.log(element);
  }
}
