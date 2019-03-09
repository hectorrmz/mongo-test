import { Supervisor } from './supervisor';

export interface Service {
  _id?: number;
  name?: string;
  schedule?: Schedule[];
  payment?: string[];
  supervisor?: Supervisor;
}

export interface Schedule {
  type?: string;
  maxWorkers?: string;
}
