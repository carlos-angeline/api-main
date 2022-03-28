import { HttpService } from "@nestjs/axios";

export interface IEmployeeCurrency {
  code: string;
  name: string;
  symbol: string;
}

export interface IEmployee {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  jobTitle: string;
  company: string;
  country: string;
  countryName: string;
  currencies: IEmployeeCurrency[];
  languages: string[];
  timezones: string[];
  region: string;
  identifier?: string;
}

export interface IEmployeesRepository {
  findAll();
  getCountriesData(countries: Array<string>);
}