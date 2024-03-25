import { CreateMachineDriverDto } from './dto/create-machine_driver.dto';
import { MachineDriver } from './models/machine_driver.model';
export declare class MachineDriverService {
    private machine_driver;
    constructor(machine_driver: typeof MachineDriver);
    createMachineDriver(createMachineDriverDto: CreateMachineDriverDto): Promise<MachineDriver>;
    getAllMachinieDrivers(): Promise<MachineDriver[]>;
    getMachineById(id: number): Promise<MachineDriver>;
    deleteMachineById(id: number): Promise<number>;
}
