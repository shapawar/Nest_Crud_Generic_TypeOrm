import { Entity, ObjectIdColumn, Column, ObjectID } from "typeorm";
import { BaseEntity } from '../../utils/base.entity'
import { ApiProperty } from "@nestjs/swagger";

@Entity('frequency')
export class FrequencyEntity extends BaseEntity {
    @ObjectIdColumn()
    _id: ObjectID;

    @Column()
    @ApiProperty()
    Name: String;
}
