import { Model } from "sequelize-typescript";
import { User } from "../../users/models/user.model";
interface ICreationAttr {
    title: string;
    content: string;
    image: string;
    userId: number;
}
export declare class Posts extends Model<Posts, ICreationAttr> {
    id: number;
    title: string;
    content: string;
    image: string;
    userId: number;
    author: User;
}
export {};
