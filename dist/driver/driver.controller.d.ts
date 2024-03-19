import { DriverService } from "./driver.service";
import { CreateDriverDto } from "./dto/create-driver.dto";
import { UpdateDriverDto } from "./dto/update-driver.dto";
import { Driver } from "./models/driver.model";
export declare class DriverController {
    private readonly driverService;
    constructor(driverService: DriverService);
    createDriver(createDriverDto: CreateDriverDto): Promise<Driver>;
    getAllDrivers(): Promise<Driver[]>;
    getDriverById(id: number): Promise<Driver>;
    deleteDriverById(id: number): Promise<number>;
    updateDriverById(id: number, updateDriverDto: UpdateDriverDto): Promise<Driver>;
}
