import { Test, TestingModule } from '@nestjs/testing';
import { HttpModule } from '@nestjs/axios';
import { EmployeesController } from './employees.controller';
import { EmployeesRepository } from './employees.repository';
import { EmployeesService } from './employees.service';

describe('EmployeesController', () => {
  let controller: EmployeesController;
  let service: EmployeesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      controllers: [EmployeesController],
      providers: [EmployeesService, EmployeesRepository],
    }).compile();

    service = module.get<EmployeesService>(EmployeesService);
    controller = module.get<EmployeesController>(EmployeesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('findAll', () => {
    it('should get all employees entries', async () => {
      const result = [
        {
          firstName: "Tim",
          lastName: "Mockman",
          dateOfBirth: "12/11/1972",
          jobTitle: "Software developer",
          company: "Mock industries",
          country: "IND",
          countryName: "India",
          currencies: [
              {
                  code: "INR",
                  name: "Indian rupee",
                  symbol: "₹",
              }
          ],
          languages: [
              "Hindi",
              "English"
          ],
          timezones: [
              "UTC+05:30"
          ],
          region: "Asia",
          identifier: "TimMockman12111972",
        },
      ];

      jest.spyOn(service, 'findAll').mockImplementation(() => new Promise((solve, reject) => solve(result)));

      expect(await controller.findAll()).toBe(result);
    });
  });
});
