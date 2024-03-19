import { Model } from "sequelize-typescript";
interface DriverCreationAttr {
    first_name: string;
    last_name: string;
    phone: string;
    driver_license: string;
}
export declare class Driver extends Model<Driver, DriverCreationAttr> {
    id: number;
    first_name: string;
    last_name: string;
    phone: string;
    driver_license: string;
}
export {};
