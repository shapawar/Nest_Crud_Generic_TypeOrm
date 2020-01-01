import { Module } from '@nestjs/common';
import { MastersController, SupplierController, DepartmentController, FrequencyController, JobTypeController, ModelController, StatusController, WorkController, ScheduleController, AppUserController, AppUserRolesController } from './masters.controller';
import { MastersService, SupplierService, DepartmentService, Frequencyervice, JobTypeService, StatusService, ModelService, WorkorderService, ScheduleService, AppUserService, AppUserRolesService } from './masters.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Machines } from './Entity/machine.entity';
import { Supplier } from './Entity/supplier.entity';
import { DepartmentsEntity } from './Entity/department.entity';
import { FrequencyEntity } from './Entity/frequency.entity';
import { JobTypesEntity } from './Entity/jobtypes.entity';
import { StatusTypesEntity } from './Entity/status.entity';
import { ModelsEntity } from './Entity/model.entity';
import { WorkordersEntity } from './Entity/workorders.entity';
import { ScheduleEntity } from './Entity/pmshedule.entity';
import { UserEntity } from './Entity/user.entity';
import { AppUserRoles } from './Entity/appuser.roles.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Machines,
      Supplier,
      DepartmentsEntity,
      FrequencyEntity,
      JobTypesEntity,
      StatusTypesEntity,
      ModelsEntity,
      WorkordersEntity,
      ScheduleEntity,
      UserEntity,
      AppUserRoles
    ])
  ],
  controllers: [
    MastersController,
    SupplierController,
    DepartmentController,
    FrequencyController,
    JobTypeController,
    StatusController,
    ModelController,
    WorkController,
    ScheduleController,
    AppUserController,
    AppUserRolesController
  ],
  providers: [
    MastersService,
    SupplierService,
    DepartmentService,
    Frequencyervice,
    JobTypeService,
    StatusService,
    ModelService,
    WorkorderService,
    ScheduleService,
    AppUserService,
    AppUserRolesService

  ]
})
export class MastersModule { }
