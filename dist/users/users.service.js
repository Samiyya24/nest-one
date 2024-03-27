"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const user_model_1 = require("./models/user.model");
const roles_service_1 = require("../roles/roles.service");
let UsersService = class UsersService {
    constructor(userRepo, rolesService) {
        this.userRepo = userRepo;
        this.rolesService = rolesService;
    }
    async createUser(createUserDto) {
        const newUser = await this.userRepo.create(createUserDto);
        const role = await this.rolesService.getRoleByValue("USER");
        if (!role) {
            throw new common_1.BadRequestException("Role not found");
        }
        await newUser.$set("roles", [role.id]);
        await newUser.save();
        newUser.roles = [role];
        return newUser;
    }
    findAll() {
        return this.userRepo.findAll({ include: { all: true } });
    }
    async getUserByEmail(email) {
        Promise;
        return this.userRepo.findOne({ where: { email }, include: { all: true } });
    }
    findOne(id) {
        return this.userRepo.findByPk(id);
    }
    update(id, updateUserDto) {
        return `This action updates a #${id} user`;
    }
    remove(id) {
        this.userRepo.destroy({ where: { id } });
        return { message: `Foydalanuvchi o'chirildi` };
    }
    async addRole(addRoleDto) {
        const user = await this.userRepo.findByPk(addRoleDto.userId);
        const role = await this.rolesService.getRoleByValue(addRoleDto.value);
        if (role && user) {
            await user.$add("roles", role.id);
            const updateUser = await this.userRepo.findByPk(addRoleDto.userId, {
                include: { all: true },
            });
            return updateUser;
        }
        throw new common_1.NotFoundException("Foydalanuvchi yoki role topilmadi");
    }
    async removeRole(addRoleDto) {
        const user = await this.userRepo.findByPk(addRoleDto.userId);
        const role = await this.rolesService.getRoleByValue(addRoleDto.value);
        if (role && user) {
            await user.$remove("roles", role.id);
            const updateUser = await this.userRepo.findByPk(addRoleDto.userId, {
                include: { all: true },
            });
            return updateUser;
        }
        throw new common_1.NotFoundException("Foydalanuvchi yoki role topilmadi");
    }
    async activateUser(activateUserDto) {
        const user = await this.userRepo.findByPk(activateUserDto.userId);
        if (user) {
            user.is_active = true;
            await user.save();
            return user;
        }
        throw new common_1.NotFoundException("Foydalanuvchi yoki role topilmadi");
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(user_model_1.User)),
    __metadata("design:paramtypes", [Object, roles_service_1.RolesService])
], UsersService);
//# sourceMappingURL=users.service.js.map