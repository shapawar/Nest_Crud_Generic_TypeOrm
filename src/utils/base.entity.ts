import { ApiPropertyOptional } from "@nestjs/swagger"
import { Entity, ObjectIdColumn, ObjectID, Column } from "typeorm"

@Entity()
export class BaseEntity {
    @ObjectIdColumn()
    _id: ObjectID

    @Column()
    @ApiPropertyOptional()
    IsDeleted: boolean
    @Column()
    @ApiPropertyOptional()
    CreatedBy: string
    @Column()
    @ApiPropertyOptional()
    CreatedOn: Date
    @Column()
    @ApiPropertyOptional()
    ModifiedBy: string
    @Column()
    @ApiPropertyOptional()
    ModifiedOn: Date
    @Column()
    @ApiPropertyOptional()
    CompanyId: number
    @Column()
    @ApiPropertyOptional()
    Company: String

    constructor(o: Object) {
        Object.assign(this, o);
    }
}