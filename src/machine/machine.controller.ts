import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from "@nestjs/common";
import { MachineService } from "./machine.service";
import { CreateMachineDto } from "./dto/create-machine.dto";
import { UpdateMachineDto } from "./dto/update-machine.dto";
import { Machine } from "./models/machine.model";

@Controller("machine")
export class MachineController {
  constructor(private readonly machineService: MachineService) {}

  @Post()
  async createMachine(
    @Body() createMachineDto: CreateMachineDto
  ): Promise<Machine> {
    return this.machineService.createMachine(createMachineDto);
  }

  @Get()
  async getAllMachines(): Promise<Machine[]> {
    return this.machineService.getAllMachinies();
  }

  @Get("/:id")
  async getMachineById(@Param("id") id: number): Promise<Machine> {
    return this.machineService.getMachineById(id);
  }

  @Delete("/:id")
  async deleteMachineById(@Param("id") id: number): Promise<number> {
    return this.machineService.deleteMachineById(id);
  }

  @Put("/:id")
  async updateMachineById(
    @Param("id") id: number,
    @Body() updateMachineDto: UpdateMachineDto
  ) {
    return this.machineService.updateMachineById(id, updateMachineDto);
  }
}
