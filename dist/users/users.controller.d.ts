import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { AddRoleDto } from "./dto/add-role.dto";
import { ActivateUserDto } from "./dto/activate-user.dto";
import { User } from "./models/user.model";
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    createUser(createUserDto: CreateUserDto): Promise<User>;
    getAllUsers(): Promise<User[]>;
    findOne(id: string): Promise<User>;
    update(id: string, updateUserDto: UpdateUserDto): string;
    remove(id: string): {
        message: string;
    };
    Addrole(addRoleDto: AddRoleDto): Promise<User>;
    removeRole(addRoleDto: AddRoleDto): Promise<User>;
    activateUser(activateUserDto: ActivateUserDto): Promise<User>;
}
