import { MachineService } from "./machine.service";
import { CreateMachineDto } from "./dto/create-machine.dto";
import { UpdateMachineDto } from "./dto/update-machine.dto";
import { Machine } from "./models/machine.model";
export declare class MachineController {
    private readonly machineService;
    constructor(machineService: MachineService);
    createMachine(createMachineDto: CreateMachineDto): Promise<Machine>;
    getAllMachines(): Promise<Machine[]>;
    getMachineById(id: number): Promise<Machine>;
    deleteMachineById(id: number): Promise<number>;
    updateMachineById(id: number, updateMachineDto: UpdateMachineDto): Promise<Machine>;
}
