import { Entity, ObjectIdColumn, ObjectID, Column, OneToMany } from "typeorm";
import { TaskEntity } from "./task.entity";
import { ApiProperty } from "@nestjs/swagger";


@Entity('pmschedules')
export class ScheduleEntity extends TaskEntity {
    @ObjectIdColumn()
    _id: ObjectID

    @ApiProperty()
    @Column()
    public Title: string;
    @ApiProperty()
    @Column()
    public Duration: number;
    @ApiProperty()
    @Column()
    public DueDate: Date;
    @ApiProperty()
    @Column()
    public IsRecurring: boolean;
    @ApiProperty()
    @Column()
    public JobTypeId: number;
    @ApiProperty()
    @Column()
    public JobType: string;
    @ApiProperty()
    @Column()
    public MachineId: number;
    @ApiProperty()
    @Column()
    public Machine: string;
    @ApiProperty()
    @Column()
    public AssignedToId: number;
    @ApiProperty()
    @Column()
    public ApplicationUser: string;
    @ApiProperty()
    @Column()
    public FrequencyTypeId: number;
    @ApiProperty()
    @Column()
    public FrequencyType: string;
    @ApiProperty()
    @Column()
    public EndDate: Date;
    @Column()
    @OneToMany(type => TaskEntity, items => items.WorkOrderId)
    tasks: TaskEntity[]

}