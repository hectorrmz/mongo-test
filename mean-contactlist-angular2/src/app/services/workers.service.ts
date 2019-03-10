import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { Worker } from '../models/worker';

@Injectable()
export class WorkerService {
  constructor(private http: Http) {}

  getWorkers(): Observable<Worker[]> {
    return this.http
      .get('api/workers')
      .pipe(map((response: Response) => response.json()));
  }

  createWorker(worker: Worker): Observable<any> {
    return this.http
      .post('api/workers', worker)
      .pipe(map((response: Response) => response.json()));
  }

  deleteWorker(id: string): Observable<any> {
    return this.http.delete('api/workers/' + id);
  }
}
