import { AuthService } from './auth.service';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { LoginDto } from './dto/login.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    SignUp(createUserDto: CreateUserDto): Promise<{
        token: string;
    }>;
    signin(loginDto: LoginDto): Promise<{
        token: string;
    }>;
}
