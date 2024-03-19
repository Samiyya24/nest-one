import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from "@nestjs/common";
import { DriverService } from "./driver.service";
import { CreateDriverDto } from "./dto/create-driver.dto";
import { UpdateDriverDto } from "./dto/update-driver.dto";
import { Driver } from "./models/driver.model";

@Controller("driver")
export class DriverController {
  constructor(private readonly driverService: DriverService) {}

  @Post()
  async createDriver(
    @Body() createDriverDto: CreateDriverDto
  ): Promise<Driver> {
    return this.driverService.createDriver(createDriverDto);
  }

  @Get()
  async getAllDrivers(): Promise<Driver[]> {
    return this.driverService.getAllDrivirs();
  }

  @Get("/:id")
  async getDriverById(@Param("id") id: number): Promise<Driver> {
    return this.driverService.getDriverById(id);
  }

  @Delete("/:id")
  async deleteDriverById(@Param("id") id: number): Promise<number> {
    return this.driverService.deleteDriverById(id);
  }

  @Put("/:id")
  async updateDriverById(
    @Param("id") id: number,
    @Body() updateDriverDto: UpdateDriverDto
  ) {
    return this.driverService.updateDriverById(id, updateDriverDto);
  }
}
