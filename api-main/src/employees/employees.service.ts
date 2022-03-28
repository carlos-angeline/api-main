import { Injectable } from '@nestjs/common';
import { EmployeesRepository } from './employees.repository';
import { getEmployeeCode } from './employees.helpers';
import { IEmployee } from './employees.interface';

@Injectable()
export class EmployeesService {
  constructor(private employeesRepository: EmployeesRepository) {}

  async findAll(): Promise<IEmployee[]> {
    // Get raw data of employees.
    const employeesRaw = this.employeesRepository.findAll();
    
    // Get employee countries.
    const countries: Array<string> = [...new Set<string>(employeesRaw.map(e => e.country))];

    // Get countries data...
    const countriesRaw = await this.employeesRepository.getCountriesData(countries).toPromise();

    const countriesData = {};

    // Get information we need from each country.
    countriesRaw.data.forEach((c) => {
      const data = {
        countryName: c.name,
        currencies: c.currencies,
        languages: c.languages.map((l) => l.name),
        timezones: c.timezones,
        region: c.region,
      };

      countriesData[c.alpha2Code] = data;
      countriesData[c.alpha3Code] = data;
    });

    // Add identifier, if appliable.
    const employees: IEmployee[] = employeesRaw.map((e) => {
      const employeeCode = getEmployeeCode(e, countriesData[e.country]);

      return {...e, ...countriesData[e.country], ...employeeCode}
    });

    // Return final data.
    return employees;
  }
}
