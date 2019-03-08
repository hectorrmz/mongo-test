import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Supervisor } from '../models/supervisor';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';

@Injectable()
export class SupervisorService {
  constructor(private http: Http) {}

  getSupervisors(): Observable<Supervisor[]> {
    return this.http
      .get('api/supervisors')
      .pipe(map((response: Response) => response.json()));
  }

  createSupervisor(supervisor: Supervisor): Observable<any> {
    return this.http
      .post('api/supervisor', supervisor)
      .pipe(map((response: Response) => response.json()));
  }
}
