import { Model } from "sequelize-typescript";
import { Role } from "../../roles/models/role.model";
interface IUserCreationAttr {
    name: string;
    email: string;
    password: string;
}
export declare class User extends Model<User, IUserCreationAttr> {
    id: number;
    name: string;
    email: string;
    password: string;
    is_active: boolean;
    roles: Role[];
}
export {};
