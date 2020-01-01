import { Entity, ObjectID, ObjectIdColumn, Column } from "typeorm";
import { BaseEntity } from "../../utils/base.entity";
import { ApiProperty } from "@nestjs/swagger";

@Entity('appuserroles')
export class AppUserRoles extends BaseEntity {
    @ObjectIdColumn()
    _id: ObjectID;
    @Column()
    @ApiProperty()
    Email: string;
    @Column()
    @ApiProperty()
    Roles: string;
}