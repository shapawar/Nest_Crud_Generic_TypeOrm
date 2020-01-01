import { Entity, Column, ManyToOne } from "typeorm";
import { BaseEntity } from "src/utils/base.entity";
import { ApiProperty } from "@nestjs/swagger";
import { WorkordersEntity } from './workorders.entity';

@Entity('tasktemplates')
export class TaskEntity extends BaseEntity {
    @Column()
    @ApiProperty()
    public Label: String
    @Column()
    @ApiProperty()
    public TaskTemplateId: Number
    @Column()
    @ApiProperty()
    public AttributeTypeId: Number

    @ManyToOne(type => WorkordersEntity, WorkOrderId => WorkOrderId.tasks)
    WorkOrderId: WorkordersEntity;
}