import { Entity, Column, ObjectID, ObjectIdColumn } from 'typeorm';
import { BaseEntity } from '../../utils/base.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity('applicationusers')
export class UserEntity extends BaseEntity {
    @ObjectIdColumn()
    _id:ObjectID;
    @Column()
    @ApiProperty()
    Email: string;
    @Column()
    @ApiProperty()
    UserName: string;
    @Column()
    @ApiProperty()
    Password: string;
    @Column()
    @ApiProperty()
    PhoneNumber: string;
    @Column()
    @ApiProperty()
    FirstName: string;
    @Column()
    @ApiProperty()
    MiddleName: string;
    @Column()
    @ApiProperty()
    LastName: string;
    @Column()
    @ApiProperty()
    Address: string;
    @Column()
    @ApiProperty()
    City: string;
    @Column()
    @ApiProperty()
    State: string;
    @Column()
    @ApiProperty()
    Country: string;
    @Column()
    @ApiProperty()
    Pincode: string;
    @Column()
    @ApiProperty()
    ManagerId: string;
    @Column()
    @ApiProperty()
    CompanyId: number;

}