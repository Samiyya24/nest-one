import { Model } from "sequelize-typescript";
interface IUserRolesCreationAttr {
    valueId: number;
    roleId: number;
}
export declare class UserRoles extends Model<UserRoles, IUserRolesCreationAttr> {
    userId: number;
    roleId: number;
}
export {};
