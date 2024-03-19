import { Model } from "sequelize-typescript";
interface MachineCreationAttr {
    model: string;
    name: string;
    companyId: number;
}
export declare class Machine extends Model<Machine, MachineCreationAttr> {
    id: number;
    model: string;
    name: string;
    companyId: number;
}
export {};
