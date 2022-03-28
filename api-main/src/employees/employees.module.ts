import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { EmployeesService } from './employees.service';
import { EmployeesController } from './employees.controller';
import { EmployeesRepository } from './employees.repository';

@Module({
  imports: [HttpModule],
  controllers: [EmployeesController],
  providers: [EmployeesService, EmployeesRepository]
})
export class EmployeesModule {}
