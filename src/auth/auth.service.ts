import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { UsersService } from "../users/users.service";
import { CreateUserDto } from "../users/dto/create-user.dto";
import * as bcrypt from "bcrypt";
import { JwtService } from "@nestjs/jwt";
import { User } from "../users/models/user.model";
import { LoginDto } from "./dto/login.dto";

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService
  ) {}
  async signUp(createUserDto: CreateUserDto) {
    const condidate = await this.usersService.getUserByEmail(
      createUserDto.email
    );
    if (condidate) {
      throw new BadRequestException("Bunday foydalanuvchi mavjud");
    }

    const hashedPassword = await bcrypt.hash(createUserDto.password, 7);
    createUserDto.password = hashedPassword;
    const newUser = await this.usersService.createUser(createUserDto);
    return this.generateToken(newUser);
  }
  private async generateToken(user: User) {
    const payload = { sub: user.id, email: user.email, roles: user.roles };
    return { token: this.jwtService.sign(payload) };
  }

  async login(loginDto: LoginDto) {
    const user = await this.usersService.getUserByEmail(loginDto.email);
    if (!user) {
      throw new UnauthorizedException("Email yoki parol hato");
    }
    const validPassword = await bcrypt.compare(
      loginDto.password,
      user.password
    );
    if(!validPassword){
      throw new UnauthorizedException("Email yoki parol hato");

    }
    return this.generateToken(user)
  }
}
