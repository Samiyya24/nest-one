import { Model } from "sequelize-typescript";
import { Company } from "../../company/models/company.model";
import { Driver } from "../../driver/models/driver.model";
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
    company: Company;
    driver: Driver[];
}
export {};
