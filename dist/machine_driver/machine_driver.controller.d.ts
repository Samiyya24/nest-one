import { MachineDriverService } from "./machine_driver.service";
import { CreateMachineDriverDto } from "./dto/create-machine_driver.dto";
import { MachineDriver } from "./models/machine_driver.model";
export declare class MachineDriverController {
    private readonly machineDriverService;
    constructor(machineDriverService: MachineDriverService);
    createMachine(createMachineDriverDto: CreateMachineDriverDto): Promise<MachineDriver>;
}
