import { Test, TestingModule } from '@nestjs/testing';
import { EmployeesService } from './employees.service';
import { HttpModule } from '@nestjs/axios';
import { MockEmployeesRepository } from './mock.employees.repository';
import { EmployeesRepository } from './employees.repository';
import { mockEnrichedEmployees } from './data/mock.employees';

describe('EmployeesService', () => {
  let service: EmployeesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      providers: [EmployeesService, {
        provide: EmployeesRepository,
        useClass: MockEmployeesRepository,
      }],
    }).compile();

    service = module.get<EmployeesService>(EmployeesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findAll', () => {
    it('should return enriched employee information', async () => {
      
      const employees = await service.findAll();
      const expectedEmployees = mockEnrichedEmployees();

      expect(employees).toEqual(expectedEmployees);
    });
  });
});
