import { Column, DataType, Model, Table } from "sequelize-typescript";

interface BuilderCreationAttr {
  full_name: string;
  birth_day: Date;
  salary: number;
  companyId: number;
}

@Table({ tableName: "builder" })
export class Builder extends Model<Builder, BuilderCreationAttr> {
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
  full_name: string;

  @Column({
    type: DataType.DATE,
  })
  birth_day: Date;

  @Column({
    type: DataType.INTEGER,
  })
  salary: number;

  @Column({
    type: DataType.INTEGER,
  })
  companyId: number;
}
