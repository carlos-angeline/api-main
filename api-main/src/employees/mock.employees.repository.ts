import { Injectable } from '@nestjs/common';
import { IEmployeesRepository } from './employees.interface';
import { mockEmployeesData } from './data/mock.employees';
import { mockCountries } from './data/mock.countries';

@Injectable()
export class MockEmployeesRepository implements IEmployeesRepository {

  findAll() {
    return mockEmployeesData;
  }

  getCountriesData(countries: Array<string>) {
    return {
      toPromise: async () => {
        return {
          data: mockCountries(),
        }
      },
    }
  }
}
