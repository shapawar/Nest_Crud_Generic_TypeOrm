import { Entity, ObjectIdColumn, Column, ObjectID } from "typeorm";
import { BaseEntity } from '../../utils/base.entity'
import { ApiProperty } from "@nestjs/swagger";

@Entity('statustypes')
export class StatusTypesEntity extends BaseEntity {
    @ObjectIdColumn()
    _id: ObjectID;

    @Column()
    @ApiProperty()
    Name: String;
}
