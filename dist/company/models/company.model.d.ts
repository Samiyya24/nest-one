import { Model } from "sequelize-typescript";
interface CompaniCreationAttr {
    name: string;
    address: string;
    phone: string;
}
export declare class Company extends Model<Company, CompaniCreationAttr> {
    id: number;
    name: string;
    address: string;
    phone: string;
}
export {};
