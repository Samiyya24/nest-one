import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { Role } from './models/role.model';
export declare class RolesService {
    private roleRepo;
    constructor(roleRepo: typeof Role);
    create(createRoleDto: CreateRoleDto): Promise<Role>;
    getAllRoles(): Promise<Role[]>;
    getRoleByValue(value: string): Promise<Role>;
    update(id: number, updateRoleDto: UpdateRoleDto): string;
    remove(id: number): string;
}
