import { Inject, BadGatewayException, Injectable, Logger } from '@nestjs/common';
import { BaseEntity } from '../utils/base.entity';
import { IBaseService } from './Ibase.service';
import { Repository } from 'typeorm';
import { json } from 'express';

@Injectable()
export class BaseService<T extends BaseEntity> implements IBaseService<T>{

    constructor(private readonly genericRepository: Repository<T>) { }


    create(entity: any): Promise<any> {
        Logger.log(`Inside base.service :create - body= ${JSON.stringify(entity)}`)
        try {
            return new Promise<any>((resolve, reject) => {
                this.genericRepository.save(entity)
                    .then(created => resolve({ status: true, msg: "data has been save successfully" }))
                    .catch(err => reject({ status: false, msg: "Operation Failed !! Try again" }))
            })
        }
        catch (error) {
            throw new BadGatewayException(error);
        }
    }

    getAll(): Promise<T[]> {
        Logger.log(`Inside base service: getAll `)
        try {
            return <Promise<T[]>>this.genericRepository.find();
        } catch (error) {
            throw new BadGatewayException(error);
        }
    }

    get(id: number): Promise<T> {
        Logger.log(`Inside base service: get - body= ${id}`)
        try {
            return <Promise<T>>this.genericRepository.findOne(id)
        } catch (error) {
            throw new BadGatewayException(error);
        }

    }

    async delete(id: number) {
        Logger.log(`Inside base service: delete - body= ${id}`)
        try {
            let deleteDeatils = await this.genericRepository.delete(id);
            return ({ msg: "Record has been deleted successfully", status: true })
        } catch (error) {
            throw new BadGatewayException(error);
        }
    }

    update(entity: any): Promise<any> {
        Logger.log(`Inside base service: update - body= ${JSON.stringify(entity)}`)
        try {
            return new Promise<any>((resolve, reject) => {
                this.genericRepository.findByIds(entity.id)
                    .then(responseGet => {
                        try {
                            if (responseGet == null) reject('Not existing')
                            let retrievedEntity: any = responseGet as any
                            this.genericRepository.save(retrievedEntity)
                                .then(response => resolve({ status: true, msg: "Record has been updated successfully" }))
                                .catch(err => reject({ status: false, data: err.message, msg: "Record updation failed !! try again" }))
                        }
                        catch (e) {
                            reject(e)
                        }
                    })
                    .catch(err => reject(err))
            })
        } catch (error) {
            throw new BadGatewayException(error);
        }
    }



}
