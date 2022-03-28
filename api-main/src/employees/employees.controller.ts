import { Controller, Get } from '@nestjs/common';
import { IEmployee } from './employees.interface';
import { EmployeesService } from './employees.service';

@Controller('employees')
export class EmployeesController {
  constructor(private readonly employeesService: EmployeesService) {}

  @Get()
  findAll(): Promise<IEmployee[]> {
    return this.employeesService.findAll();
  }
}
