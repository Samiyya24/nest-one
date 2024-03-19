import { Column, DataType, Model, Table } from "sequelize-typescript";

interface DriverCreationAttr {
  first_name: string;
  last_name: string;
  phone: string;
  driver_license: string;
}

@Table({ tableName: "driver" })
export class Driver extends Model<Driver, DriverCreationAttr> {
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
  first_name: string;

  @Column({
    type: DataType.STRING(15),
  })
  last_name: string;

  @Column({
    type: DataType.STRING(15),
  })
  phone: string;
  
  @Column({
    type: DataType.STRING(100),
  })
  driver_license: string;
}
