import { Injectable } from "@nestjs/common";
import { CreateMachineDto } from "./dto/create-machine.dto";
import { UpdateMachineDto } from "./dto/update-machine.dto";
import { InjectModel } from "@nestjs/sequelize";
import { Machine } from "./models/machine.model";

@Injectable()
export class MachineService {
  constructor(@InjectModel(Machine) private machineRepo: typeof Machine) {}

  async createMachine(createMachineDto: CreateMachineDto): Promise<Machine> {
    const machine = await this.machineRepo.create(createMachineDto);
    return machine;
  }

  async getAllMachinies(): Promise<Machine[]> {
    return this.machineRepo.findAll();
  }

  async getMachineById(id: number): Promise<Machine> {
    return this.machineRepo.findByPk(id);
  }

  async deleteMachineById(id: number): Promise<number> {
    return this.machineRepo.destroy({ where: { id } });
  }
  async updateMachineById(
    id: number,
    updateMachineDto: UpdateMachineDto
  ): Promise<Machine> {
    const machine = await this.machineRepo.update(updateMachineDto, {
      where: { id },
      returning: true,
    });
    return machine[1][0];
  }
}
