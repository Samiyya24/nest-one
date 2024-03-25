import {
  BelongsToMany,
  Column,
  DataType,
  Model,
  Table,
} from "sequelize-typescript";
import { UserRoles } from "./user-role.model";
import { User } from "../../users/models/user.model";

interface IRolesCreationAttr {
  value: string;
  description: string;
}

@Table({ tableName: "roles" })
export class Role extends Model<Role, IRolesCreationAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.STRING(50),
    allowNull: false,
    unique: true,
  })
  value: string;

  @Column({
    type: DataType.STRING(50),
  
  })
  sescription: string;

  @BelongsToMany(()=> User, ()=>UserRoles)
  users:User[]
}
