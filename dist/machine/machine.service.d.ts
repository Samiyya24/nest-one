import { CreateMachineDto } from "./dto/create-machine.dto";
import { UpdateMachineDto } from "./dto/update-machine.dto";
import { Machine } from "./models/machine.model";
export declare class MachineService {
    private machineRepo;
    constructor(machineRepo: typeof Machine);
    createMachine(createMachineDto: CreateMachineDto): Promise<Machine>;
    getAllMachinies(): Promise<Machine[]>;
    getMachineById(id: number): Promise<Machine>;
    deleteMachineById(id: number): Promise<number>;
    updateMachineById(id: number, updateMachineDto: UpdateMachineDto): Promise<Machine>;
}
