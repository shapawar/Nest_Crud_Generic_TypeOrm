import { Entity, ObjectIdColumn, ObjectID, Column, OneToMany } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";
import { TaskEntity } from "./task.entity";

@Entity('workorders')
export class WorkordersEntity extends TaskEntity {


    @ObjectIdColumn()
    _id: ObjectID
    @Column()
    @OneToMany(type => TaskEntity, items => items.WorkOrderId)
    tasks: TaskEntity[]

    @Column()
    @ApiProperty()
    Title: string
    @Column()
    @ApiProperty()
    DueDate: Date
    @Column()
    @ApiProperty()
    JobTypeId: number
    @Column()
    @ApiProperty()
    JobType: string
    @Column()
    @ApiProperty()
    MachineId: number
    @Column()
    @ApiProperty()
    Machine: string
    @Column()
    @ApiProperty()
    AssignedToId: number
    @Column()
    @ApiProperty()
    ApplicationUser: string
    @Column()
    @ApiProperty()
    StatusTypeId: number
    @Column()
    @ApiProperty()
    StatusType: string
    @Column()
    @ApiProperty()
    OriginatorId: number
    @Column()
    @ApiProperty()
    IsRecurring: boolean

}