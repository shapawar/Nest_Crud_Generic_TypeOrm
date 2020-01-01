import { Entity, ObjectIdColumn, Column, ObjectID } from "typeorm";
import { BaseEntity } from '../../utils/base.entity'
import { ApiProperty } from "@nestjs/swagger";

@Entity('jobtypes')
export class JobTypesEntity extends BaseEntity {
    @ObjectIdColumn()
    _id: ObjectID;

    @Column()
    @ApiProperty()
    Name: String;
}
