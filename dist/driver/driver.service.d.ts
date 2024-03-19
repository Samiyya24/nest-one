import { CreateDriverDto } from "./dto/create-driver.dto";
import { UpdateDriverDto } from "./dto/update-driver.dto";
import { Driver } from "./models/driver.model";
export declare class DriverService {
    private driverRepo;
    constructor(driverRepo: typeof Driver);
    createDriver(createDriverDto: CreateDriverDto): Promise<Driver>;
    getAllDrivirs(): Promise<Driver[]>;
    getDriverById(id: number): Promise<Driver>;
    deleteDriverById(id: number): Promise<number>;
    updateDriverById(id: number, updateDriverDto: UpdateDriverDto): Promise<Driver>;
}
