import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { Service } from '../models/service';

@Injectable()
export class ServiceService {
  constructor(private http: Http) {}

  getservices(): Observable<Service[]> {
    return this.http
      .get('api/services')
      .pipe(map((response: Response) => response.json()));
  }

  createService(service: Service): Observable<any> {
    return this.http
      .post('api/services', service)
      .pipe(map((response: Response) => response.json()));
  }
}
