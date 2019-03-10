import { Supervisor } from './supervisor';
import { Service } from './service';

export interface Worker {
  supervisor?: Supervisor;
  service?: Service;
  firstName?: string;
  lastName?: string;
  phone?: string;
  dob?: Date;
  admissionDate?: Date;
  accounNumber?: string;
  status?: string;
  ssn?: string;
  infonavit?: string;
  address?: Address;
}

export interface Address {
  address?: string;
  city?: string;
  zipcode?: string;
  region?: string;
}
