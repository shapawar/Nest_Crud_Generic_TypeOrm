import { Entity, ObjectIdColumn, ObjectID, Column } from "typeorm";
import { BaseEntity } from "src/utils/base.entity";
import { ApiProperty } from "@nestjs/swagger";

@Entity('suppliers')
export class Supplier extends BaseEntity {
    @ObjectIdColumn()
    _id: ObjectID;

    @Column()
    @ApiProperty()
    Name: String;
    @Column()
    @ApiProperty()
    AddresLine1: String;
    @Column()
    @ApiProperty()
    AddresLine2: String;
    @Column()
    @ApiProperty()
    City: String;
    @Column()
    @ApiProperty()
    State: String;
    @Column()
    @ApiProperty()
    Country: String;
    @Column()
    @ApiProperty()
    PinCode: String;
    @Column()
    @ApiProperty()
    CompanyURL: String;
    @Column()
    @ApiProperty()
    CompanyEmail: String;
    @Column()
    @ApiProperty()
    CompanyPhoneNumber: String;
    @Column()
    @ApiProperty()
    PrimaryContactFirstName: String;
    @Column()
    @ApiProperty()
    PrimaryContactLastName: String;
    @Column()
    @ApiProperty()
    PrimaryContactMobile: String;

    constructor(o: Object) {
        super(o);
    }
}