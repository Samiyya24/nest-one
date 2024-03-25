import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
} from "@nestjs/common";
import { MachineDriverService } from "./machine_driver.service";
import { CreateMachineDriverDto } from "./dto/create-machine_driver.dto";
import { UpdateMachineDriverDto } from "./dto/update-machine_driver.dto";
import { MachineDriver } from "./models/machine_driver.model";

@Controller("machine-driver")
export class MachineDriverController {
  constructor(private readonly machineDriverService: MachineDriverService) {}

  @Post()
  async createMachine(
    @Body() createMachineDriverDto: CreateMachineDriverDto
  ): Promise<MachineDriver> {
    return this.machineDriverService.createMachineDriver(
      createMachineDriverDto
    );
  }

  // @Get()
  // async getAllMachineDrivers(): Promise<MachineDriver[]> {
  //   return this.machineDriverService.getAllMachineDrivers();
  // }

  // @Get("/:id")
  // async getMachineDriverById(@Param("id") id: number): Promise<MachineDriver> {
  //   return this.machineDriverService.getMachineDriverById(id);
  // }

  // @Delete("/:id")
  // async deleteMachineDriverById(@Param("id") id: number): Promise<number> {
  //   return this.machineDriverService.deleteMachineDriverById(id);
  // }

  // @Put("/:id")
  // async updateMachineDriverById(
  //   @Param("id") id: number,
  //   @Body() updateMachineDriverDto: UpdateMachineDriverDto
  // ) {
  //   return this.machineDriverService.updateMachineById(id, updateMachineDriverDto);
  // }
}
