import { Injectable } from '@nestjs/common';
import { CreateMachineDriverDto } from './dto/create-machine_driver.dto';
import { InjectModel } from '@nestjs/sequelize';
import { MachineDriver } from './models/machine_driver.model';
import { UpdateMachineDriverDto } from './dto/update-machine_driver.dto';

@Injectable()
export class MachineDriverService {
  constructor(
    @InjectModel(MachineDriver) private machine_driver: typeof MachineDriver
  ) {}

  async createMachineDriver(
    createMachineDriverDto: CreateMachineDriverDto
  ): Promise<MachineDriver> {
    const machineDriver = await this.machine_driver.create(createMachineDriverDto);
    return machineDriver;
  }

  async getAllMachinieDrivers(): Promise<MachineDriver[]> {
    return this.machine_driver.findAll();
  }

  async getMachineById(id: number): Promise<MachineDriver> {
    return this.machine_driver.findByPk(id);
  }

  async deleteMachineById(id: number): Promise<number> {
    return this.machine_driver.destroy({ where: { id } });
  }
  // async updateMachineById(
  //   id: number,
  //   updateMachineDto: UpdateMachineDriverDto
    
  // ): Promise<MachineDriver> {
  //   const machineDriver = await this.machine_driver.update(updateMachineDto, {
  //     where: { id },
  //     returning: true,
  //   });
  //   return machineDriver[1][0];
  // }
}
