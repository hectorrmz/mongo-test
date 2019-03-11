import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Worker } from 'src/app/models/worker';
import { WorkerService } from 'src/app/services/workers.service';
import { ServiceService } from 'src/app/services/services.service';
import { Service } from 'src/app/models/service';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';
import { startWith } from 'rxjs/internal/operators/startWith';
import { map } from 'rxjs/internal/operators/map';

@Component({
  selector: 'app-worker-form',
  templateUrl: './worker-form.component.html',
  styleUrls: ['./worker-form.component.scss']
})
export class WorkerFormComponent implements OnInit {
  @Output() workedSaved: EventEmitter<Worker> = new EventEmitter();
  worker: Worker = { address: {} };
  services: Service[];
  servicesControl: FormControl;
  filteredOptions: Observable<Service[]>;
  wService: string;
  filtered: Service[];

  constructor(
    private workerService: WorkerService,
    private serviceService: ServiceService
  ) {}

  ngOnInit() {
    this.loadServices();
  }

  createWorker() {
    this.workerService.createWorker(this.worker).subscribe(res => {
      this.worker = {};
      this.workedSaved.emit(res);
    });
  }

  filterServices() {
    if (this.wService) {
      this.filtered = this._filter(this.wService);
    }
  }

  displayFn(service?: Service): string | undefined {
    return service ? service.name : undefined;
  }

  onSelectionChanged(service: Service) {
    console.log(service);
  }

  private _filter(value: string): Service[] {
    const filterValue = value.toLowerCase();

    return this.services.filter(option =>
      option.name.toLowerCase().includes(filterValue)
    );
  }

  private loadServices() {
    this.serviceService.getservices().subscribe(services => {
      this.services = services;
    });
  }
}
