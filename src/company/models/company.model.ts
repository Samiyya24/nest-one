import { Column, DataType, Model, Table } from "sequelize-typescript";

interface CompaniCreationAttr{
    name:string,
    address:string,
    phone:string
}

@Table({ tableName: "company" })
export class Company extends Model<Company, CompaniCreationAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.STRING(100),
    allowNull:false,
    unique:true
  })
  name: string;

  @Column({
    type: DataType.STRING,
  })
  address: string;

  @Column({
    type: DataType.STRING(15),
  })
  phone: string;
}



















