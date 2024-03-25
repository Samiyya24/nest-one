import { RolesService } from './roles.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
export declare class RolesController {
    private readonly rolesService;
    constructor(rolesService: RolesService);
    createRole(createRoleDto: CreateRoleDto): Promise<import("./models/role.model").Role>;
    getAllRoles(): Promise<import("./models/role.model").Role[]>;
    getRoleByValue(value: string): Promise<import("./models/role.model").Role>;
    update(id: string, updateRoleDto: UpdateRoleDto): string;
    remove(id: string): string;
}
