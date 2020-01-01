import { Controller } from '@nestjs/common';
import { ApiTags, ApiResponse, ApiBody } from '@nestjs/swagger';
import { BaseController } from 'src/utils/base.controller';
import { Machines } from './Entity/machine.entity';
import { MastersService, SupplierService, ModelService, DepartmentService, Frequencyervice, JobTypeService, StatusService, WorkorderService, ScheduleService, AppUserService, AppUserRolesService } from './masters.service';
import { Supplier } from './Entity/supplier.entity';
import { DepartmentsEntity } from './Entity/department.entity';
import { ModelsEntity } from './Entity/model.entity';
import { FrequencyEntity } from './Entity/frequency.entity';
import { JobTypesEntity } from './Entity/jobtypes.entity';
import { StatusTypesEntity } from './Entity/status.entity';
import { WorkordersEntity } from './Entity/workorders.entity';
import { Connection } from 'typeorm';
import { ScheduleEntity } from './Entity/pmshedule.entity';
import { UserEntity } from './Entity/user.entity';
import { AppUserRoles } from './Entity/appuser.roles.entity';


@ApiTags('machine')
@Controller('machine')
export class MastersController extends BaseController<Machines> {

    constructor(private readonly masterService: MastersService) {
        super(masterService)
    }
}

@ApiTags('supplier')
@Controller('supplier')
export class SupplierController extends BaseController<Supplier>{
    constructor(private readonly serviceModel: SupplierService) {
        super(serviceModel)
    }
}

@ApiTags('model')
@Controller('model')
export class ModelController extends BaseController<ModelsEntity>{
    constructor(private readonly serviceModel: ModelService) {
        super(serviceModel)
    }
}

@ApiTags('department')
@Controller('department')
export class DepartmentController extends BaseController<DepartmentsEntity>{
    constructor(private readonly serviceModel: DepartmentService) {
        super(serviceModel)
    }
}

@ApiTags('frequency')
@Controller('frequency')
export class FrequencyController extends BaseController<FrequencyEntity>{
    constructor(private readonly serviceModel: Frequencyervice) {
        super(serviceModel)
    }
}

@ApiTags('jobtype')
@Controller('jobtype')
export class JobTypeController extends BaseController<JobTypesEntity>{
    constructor(private readonly serviceModel: JobTypeService) {
        super(serviceModel)
    }
}

@ApiTags('status')
@Controller('status')
export class StatusController extends BaseController<StatusTypesEntity>{
    constructor(private readonly serviceModel: StatusService) {
        super(serviceModel)
    }
}

@ApiTags('workorder')
@Controller('workorder')
export class WorkController extends BaseController<WorkordersEntity>{
    constructor(private readonly serviceModel: WorkorderService) {
        super(serviceModel)
    }
}

@ApiTags('pmschedule')
@Controller('pmschedule')
export class ScheduleController extends BaseController<ScheduleEntity>{
    constructor(private readonly serviceModel: ScheduleService) {
        super(serviceModel)
    }
}

@ApiTags('applicationuser')
@Controller('applicationuser')
export class AppUserController extends BaseController<UserEntity>{
    constructor(private readonly serviceModel: AppUserService) {
        super(serviceModel)
    }
}

@ApiTags('appuserroles')
@Controller('appuserroles')
export class AppUserRolesController extends BaseController<AppUserRoles>{
    constructor(private readonly serviceModel: AppUserRolesService) {
        super(serviceModel)
    }
}


