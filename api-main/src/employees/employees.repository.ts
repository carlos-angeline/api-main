import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { data } from './data/employees';
import { IEmployeesRepository } from './employees.interface';

@Injectable()
export class EmployeesRepository implements IEmployeesRepository {

  constructor(private httpService: HttpService) {}

  findAll() {
    return data;
  }

  getCountriesData(countries: Array<string>) {
    const countriesQuery = countries.join(';');

    return this.httpService.get(`https://restcountries.eu/rest/v2/alpha?codes=${countriesQuery}`);
  }
}
