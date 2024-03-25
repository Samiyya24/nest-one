import { Module } from '@nestjs/common';
import { MachineDriverService } from './machine_driver.service';
import { MachineDriverController } from './machine_driver.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Machine } from '../machine/models/machine.model';

@Module({
  imports: [SequelizeModule.forFeature([Machine])],
  controllers: [MachineDriverController],
  providers: [MachineDriverService],
})
export class MachineDriverModule {}
