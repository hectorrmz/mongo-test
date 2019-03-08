import { Component, OnInit } from '@angular/core';
import { Supervisor } from 'src/app/models/supervisor';
import { SupervisorService } from 'src/app/services/supervisors.service';

@Component({
  selector: 'app-supervisor-form',
  templateUrl: './supervisor-form.component.html',
  styleUrls: ['./supervisor-form.component.scss'],
})
export class SupervisorFormComponent implements OnInit {
  supervisor: Supervisor = {};

  constructor(private supervisorService: SupervisorService) {}

  ngOnInit() {}

  createSupervisor() {
    this.supervisorService.createSupervisor(this.supervisor).subscribe(res => {
      console.log(res);
    });
  }
}
