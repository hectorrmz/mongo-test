import { Supervisor } from './supervisor';

export interface Service {
  _id?: number;
  name?: string;
  schedules?: Schedule[];
  positions?: Position[];
  supervisor?: Supervisor;
  scheduleType?: string;
  capacity?: number;
}

export interface Schedule {
  name?: string;
  maxWorkers?: number;
}
export interface Position {
  name?: string;
  salary?: number;
}
