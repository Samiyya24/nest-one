import { Column, DataType, Model, Table } from "sequelize-typescript";

interface MachineCreationAttr {
  model: string;
  name: string;
  companyId: number;
}

@Table({ tableName: "machine" })
export class Machine extends Model<Machine, MachineCreationAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.STRING(15),
    allowNull: false,
  })
  model: string;

  @Column({
    type: DataType.STRING(15),
  })
  name: string;

  @Column({
    type: DataType.INTEGER,
  })
  companyId: number;
}
