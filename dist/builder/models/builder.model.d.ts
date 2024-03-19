import { Model } from "sequelize-typescript";
interface BuilderCreationAttr {
    full_name: string;
    birth_day: Date;
    salary: number;
    companyId: number;
}
export declare class Builder extends Model<Builder, BuilderCreationAttr> {
    id: number;
    full_name: string;
    birth_day: Date;
    salary: number;
    companyId: number;
}
export {};
