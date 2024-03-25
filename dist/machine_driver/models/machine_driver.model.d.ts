import { Model } from "sequelize-typescript";
import { Machine } from "../../machine/models/machine.model";
import { Driver } from "../../driver/models/driver.model";
interface MachineDriverCreationAttr {
    machineId: number;
    driverId: number;
}
export declare class MachineDriver extends Model<Machine, MachineDriverCreationAttr> {
    id: number;
    machineId: number;
    driverId: number;
    machine: Machine;
    driver: Driver;
}
export {};
