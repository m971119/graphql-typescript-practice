import { Company } from './companies.interface';

export interface User {
  id: number;
  email: string;
  password: string;
  company: Company;
}
