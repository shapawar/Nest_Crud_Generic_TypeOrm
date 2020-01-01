import { Entity, Column, PrimaryGeneratedColumn, ObjectIdColumn, ObjectID, PrimaryColumn, ChildEntity } from 'typeorm';
import { BaseEntity } from '../../utils/base.entity';
import { ApiProperty, ApiPropertyOptional, ApiBody } from '@nestjs/swagger';


@Entity('machines')
export class Machines extends BaseEntity {
    @ObjectIdColumn()
    _id: ObjectID;

    @Column()
    @ApiProperty()
    public Name: string

    @Column()
    @ApiProperty()
    public Location: string

    @Column()
    @ApiProperty()
    public WarrantyExpiryDate: Date

    @Column()
    @ApiProperty()
    public SerialNumber: string

    @Column()
    @ApiProperty()
    public InService: Boolean

    @Column()
    @ApiProperty()
    public ModelId: number

    @Column()
    @ApiProperty()
    public ModelType: string

    @Column()
    @ApiProperty()
    public SupplierId: number

    @Column()
    @ApiProperty()
    public SupplierManufacturer: string

    @Column()
    @ApiProperty()
    public DealerId: number

    @Column()
    @ApiProperty()
    public SupplierDealer: string

    @Column()
    @ApiProperty()
    public AMCVendorId: number

    @Column()
    @ApiProperty()
    public SupplierAMCVendor: string

    constructor(o: Object) {
        super(o);
    }
}