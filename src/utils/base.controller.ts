import { BaseEntity } from "./base.entity";
import { IBaseService } from "./Ibase.service";
import { Get, Param, Body, Post, Delete, Put, Logger } from "@nestjs/common";
import { ApiResponse, ApiBody } from "@nestjs/swagger";

export class BaseController<T extends BaseEntity>{

    constructor(private readonly utilservice: IBaseService<T>) { }

    @Get()
    @ApiResponse({ status: 200, description: "OK" })
    async findAll(): Promise<T[]> {
        Logger.debug(`Inside base controller : findAll -body `);
        return this.utilservice.getAll();
    }

    @Get(':id')
    @ApiResponse({ status: 200, description: 'Entity retrived successfully' })
    @ApiResponse({ status: 404, description: 'Entity does not exist' })
    async findById(@Param('id') id: number): Promise<T> {
        Logger.debug(`Inside base controller : findbyid -body = ${id}`);
        return this.utilservice.get(id)
    }

    
    @Post()
    @ApiResponse({ status: 201, description: 'The record has been successfully created.' })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: 'Bad Request.' })
    async create(@Body() entity: T): Promise<number> {
        await this.getBaseEntityValue(entity);
        Logger.debug(`Inside base Controller : create - body ${JSON.stringify(entity)}`)
        return this.utilservice.create(entity)
    }

    @Delete(':id')
    @ApiResponse({ status: 200, description: 'Entity deleted successfully.' })
    @ApiResponse({ status: 400, description: 'Bad Request.' })
    async delete(@Param('id') id: number) {
        Logger.debug(`Inside base controller : delete -body = ${id}`);
        return await this.utilservice.delete(id);
    }

    @Put()
    @ApiResponse({ status: 400, description: 'Bad Request.' })
    @ApiResponse({ status: 200, description: 'Entity deleted successfully.' })
    async update(@Body() entity: T): Promise<T> {
        Logger.debug(`Inside base controller : update -body = ${entity}`);
        return this.utilservice.update(entity);
    }

    async getBaseEntityValue(data) {
        data.IsDeleted = false;
        data.CreatedBy = data.Name;
        data.CreatedOn = new Date();
        data.ModifiedBy = data.Name;
        data.ModifiedOn = new Date()
        data.CompanyId = 1;
        data.Company = "Flairminds";
        return data;
    }
}