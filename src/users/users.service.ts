import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './models/user.model';
import { RolesService } from '../roles/roles.service';
import { AddRoleDto } from './dto/add-role.dto';
import { ActivateUserDto } from './dto/activate-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User) private userRepo: typeof User,
    private readonly rolesService: RolesService
  ) {}

  async createUser(createUserDto: CreateUserDto) {
    const newUser = await this.userRepo.create(createUserDto);
    const role = await this.rolesService.getRoleByValue("USER");
    if (!role) {
      throw new BadRequestException("Role not found");
    }
    await newUser.$set("roles", [role.id]);
    await newUser.save();
    newUser.roles = [role];
    return newUser;
  }

  findAll() {
    return this.userRepo.findAll({ include: { all: true } });
  }

  async getUserByEmail(email: string) {
    Promise;
    return this.userRepo.findOne({ where: { email }, include:{all:true} });
  }

  findOne(id: number) {
    return this.userRepo.findByPk(id);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    this.userRepo.destroy({ where: { id } });
    return { message: `Foydalanuvchi o'chirildi` };
  }

  async addRole(addRoleDto: AddRoleDto) {
    const user = await this.userRepo.findByPk(addRoleDto.userId);
    const role = await this.rolesService.getRoleByValue(addRoleDto.value);
    if (role && user) {
      await user.$add("roles", role.id);
      const updateUser = await this.userRepo.findByPk(addRoleDto.userId, {
        include: { all: true },
      });
      return updateUser;
    }
    throw new NotFoundException("Foydalanuvchi yoki role topilmadi");
  }

  async removeRole(addRoleDto: AddRoleDto) {
    const user = await this.userRepo.findByPk(addRoleDto.userId);
    const role = await this.rolesService.getRoleByValue(addRoleDto.value);
    if (role && user) {
      await user.$remove("roles", role.id);
      const updateUser = await this.userRepo.findByPk(addRoleDto.userId, {
        include: { all: true },
      });
      return updateUser;
    }
    throw new NotFoundException("Foydalanuvchi yoki role topilmadi");
  }

  async activateUser(activateUserDto:ActivateUserDto){
    const user = await this.userRepo.findByPk(activateUserDto.userId);
    if(user){
      user.is_active = true
      await user.save()
      return user
    }
    throw new NotFoundException("Foydalanuvchi yoki role topilmadi");

  }
}
