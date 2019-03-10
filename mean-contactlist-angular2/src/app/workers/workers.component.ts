import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';
import { Worker } from '../models/worker';
import swal from 'sweetalert';
import { WorkerService } from '../services/workers.service';

@Component({
  selector: 'app-workers',
  templateUrl: './workers.component.html',
  styleUrls: ['./workers.component.scss']
})
export class WorkersComponent implements OnInit {
  @ViewChild('workerModal') workerModal: ModalComponent;
  displayedColumns: string[] = ['name', 'phone', 'actions'];
  workers: Worker[] = [];

  constructor(private workerService: WorkerService) {}

  ngOnInit() {
    this.loadWorkers();
  }

  editWorker(element) {
    console.log(element);
  }
  deleteWorker(id: string) {
    swal({
      title: 'Delete Worker',
      text: 'Are you sure you want to delete this entry?',
      icon: 'warning',
      buttons: ['Cancelar', 'Ok'],
      dangerMode: true
    }).then(willDelete => {
      if (willDelete) {
        this.workerService.deleteWorker(id).subscribe(() => {
          this.loadWorkers();
        });
      }
    });
  }

  onWorkerSaved(_worker: Worker) {
    this.loadWorkers();
    this.workerModal.closeModal();
  }

  private loadWorkers() {
    this.workerService.getWorkers().subscribe(res => {
      this.workers = res;
    });
  }
}
