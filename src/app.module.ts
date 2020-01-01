import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import { Connection } from 'typeorm';
import { MastersModule } from './masters/masters.module';

@Module({
  imports: [TypeOrmModule.forRoot(), MastersModule],
  controllers: [],
  providers: [],
})
export class AppModule {

  constructor(private readonly connection: Connection) { }

}
