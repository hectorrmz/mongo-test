import { Component, OnInit } from '@angular/core';
import { Service } from 'src/app/models/service';

@Component({
  selector: 'app-service-form',
  templateUrl: './service-form.component.html',
  styleUrls: ['./service-form.component.scss'],
})
export class ServiceFormComponent implements OnInit {
  service: Service = {};
  schedules = [
    { name: 'Matutino', value: false },
    { name: 'Vespertino', value: true },
    { name: 'Nocturno', value: false },
  ];

  constructor() {}

  ngOnInit() {}

  createService() {}
}
