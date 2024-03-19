import { Injectable } from "@nestjs/common";
import { CreateDriverDto } from "./dto/create-driver.dto";
import { UpdateDriverDto } from "./dto/update-driver.dto";
import { Driver } from "./models/driver.model";
import { InjectModel } from "@nestjs/sequelize";

@Injectable()
export class DriverService {
  constructor(@InjectModel(Driver) private driverRepo: typeof Driver) {}

  async createDriver(createDriverDto: CreateDriverDto): Promise<Driver> {
    const driver = await this.driverRepo.create(createDriverDto);
    return driver;
  }

  async getAllDrivirs(): Promise<Driver[]> {
    return this.driverRepo.findAll();
  }

  async getDriverById(id: number): Promise<Driver> {
    return this.driverRepo.findByPk(id);
  }

  async deleteDriverById(id: number): Promise<number> {
    return this.driverRepo.destroy({ where: { id } });
  }
  async updateDriverById(
    id: number,
    updateDriverDto: UpdateDriverDto
  ): Promise<Driver> {
    const driver = await this.driverRepo.update(updateDriverDto, {
      where: { id },
      returning: true,
    });
    return driver[1][0];
  }
}
