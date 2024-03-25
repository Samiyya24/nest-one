import { Model } from "sequelize-typescript";
import { User } from "../../users/models/user.model";
interface IRolesCreationAttr {
    value: string;
    description: string;
}
export declare class Role extends Model<Role, IRolesCreationAttr> {
    id: number;
    value: string;
    sescription: string;
    users: User[];
}
export {};
