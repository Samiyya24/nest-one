import { UsersService } from "../users/users.service";
import { CreateUserDto } from "../users/dto/create-user.dto";
import { JwtService } from "@nestjs/jwt";
import { LoginDto } from "./dto/login.dto";
export declare class AuthService {
    private readonly usersService;
    private readonly jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    signUp(createUserDto: CreateUserDto): Promise<{
        token: string;
    }>;
    private generateToken;
    login(loginDto: LoginDto): Promise<{
        token: string;
    }>;
}
