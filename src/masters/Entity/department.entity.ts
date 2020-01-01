import { Entity, ObjectIdColumn, Column, ObjectID } from "typeorm";
import { BaseEntity } from '../../utils/base.entity'
import { ApiProperty } from "@nestjs/swagger";

@Entity('departments')
export class DepartmentsEntity extends BaseEntity {
    @ObjectIdColumn()
    _id: ObjectID;

    @Column()
    @ApiProperty()
    Name: String;

    constructor(o: Object) {
        super(o);
    }
}
