import { Component, OnInit } from '@angular/core';
import { Service } from '../models/service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss'],
})
export class ServiceComponent implements OnInit {
  displayedColumns: string[] = [
    'name',
    'supervisor',
    'schedule',
    'payment',
    'actions',
  ];
  services: Service[] = [];

  constructor() {}

  ngOnInit() {}

  editService() {}
}
