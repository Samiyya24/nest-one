import {  BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript"
import { User } from "../../users/models/user.model"

interface ICreationAttr{
    title:string
    content:string
    image:string
    userId:number
}
@Table({ tableName: "posts" })
export class Posts extends Model<Posts, ICreationAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  title: string;
  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  content: string;
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  image: string;
  @ForeignKey(()=>User)
  @Column({
    type: DataType.INTEGER,
  })
  userId: number;
  @BelongsTo(()=>User)
  author:User
}
