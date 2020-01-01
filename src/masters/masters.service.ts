import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/utils/base.service';
import { Machines } from './Entity/machine.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Supplier } from './Entity/supplier.entity';
import { ModelsEntity } from './Entity/model.entity';
import { DepartmentsEntity } from './Entity/department.entity';
import { FrequencyEntity } from './Entity/frequency.entity';
import { JobTypesEntity } from './Entity/jobtypes.entity';
import { StatusTypesEntity } from './Entity/status.entity';
import { WorkordersEntity } from './Entity/workorders.entity';
import { Guid } from "guid-typescript";
import { ScheduleEntity } from './Entity/pmshedule.entity';
import { UserEntity } from './Entity/user.entity';
import { AppUserRoles } from './Entity/appuser.roles.entity';

@Injectable()
export class MastersService extends BaseService<Machines> {

    constructor(@InjectRepository(Machines) private readonly machinesRepository: Repository<Machines>) {
        super(machinesRepository);
    }
}

@Injectable()
export class SupplierService extends BaseService<Supplier>{
    constructor(@InjectRepository(Supplier) private readonly objRepository: Repository<Supplier>) {
        super(objRepository);
    }
}

@Injectable()
export class ModelService extends BaseService<ModelsEntity>{
    constructor(@InjectRepository(ModelsEntity) private readonly objRepository: Repository<ModelsEntity>) {
        super(objRepository);
    }
}

@Injectable()
export class DepartmentService extends BaseService<DepartmentsEntity>{
    constructor(@InjectRepository(DepartmentsEntity) private readonly objRepository: Repository<DepartmentsEntity>) {
        super(objRepository);
    }
}

@Injectable()
export class Frequencyervice extends BaseService<FrequencyEntity>{
    constructor(@InjectRepository(FrequencyEntity) private readonly objRepository: Repository<FrequencyEntity>) {
        super(objRepository);
    }
}

Injectable()
export class JobTypeService extends BaseService<JobTypesEntity>{
    constructor(@InjectRepository(JobTypesEntity) private readonly objRepository: Repository<JobTypesEntity>) {
        super(objRepository);
    }
}

Injectable()
export class StatusService extends BaseService<StatusTypesEntity>{
    constructor(@InjectRepository(StatusTypesEntity) private readonly objRepository: Repository<StatusTypesEntity>) {
        super(objRepository);
    }
}

Injectable()
export class WorkorderService extends BaseService<WorkordersEntity>{
    constructor(@InjectRepository(WorkordersEntity) private readonly objRepository: Repository<WorkordersEntity>) {
        super(objRepository);
    }
}

Injectable()
export class ScheduleService extends BaseService<ScheduleEntity>{
    constructor(@InjectRepository(ScheduleEntity) private readonly objRepository: Repository<ScheduleEntity>) {
        super(objRepository);
    }
}

Injectable()
export class AppUserService extends BaseService<UserEntity>{
    constructor(@InjectRepository(UserEntity) private readonly objRepository: Repository<UserEntity>) {
        super(objRepository);
    }
}

Injectable()
export class AppUserRolesService extends BaseService<AppUserRoles>{
    constructor(@InjectRepository(AppUserRoles) private readonly objRepository: Repository<AppUserRoles>) {
        super(objRepository);
    }
}