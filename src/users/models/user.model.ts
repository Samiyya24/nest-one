import { BelongsToMany, Column, DataType, Model, Table } from "sequelize-typescript";
import { Role } from "../../roles/models/role.model";
import { UserRoles } from "../../roles/models/user-role.model";
import { ApiProperty } from "@nestjs/swagger";

interface IUserCreationAttr {
  name: string;
  email: string;
  password: string;
}
@Table({ tableName: "users" })
export class User extends Model<User, IUserCreationAttr> {
  @ApiProperty({ example: 1, description: "Foydalanuvchi unikal ID raqami" })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;
  @ApiProperty({ example: "User1", description: "Foydalanuvchi ismi" })
  @Column({
    type: DataType.STRING,
  })
  name: string;
  @ApiProperty({
    example: "User1@mail.uz",
    description: "Foydalanuvchi emaili",
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  email: string;
  @ApiProperty({ example: "Uzbek!$t0n", description: "Foydalanuvchi paroli" })
  @Column({
    type: DataType.STRING,
  })
  password: string;
  @ApiProperty({ example: "true", description: "Foydalanuvchi faolligi" })
  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  is_active: boolean;

  @BelongsToMany(() => Role, () => UserRoles)
  roles: Role[];
}
