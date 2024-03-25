import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { LoginDto } from './dto/login.dto';

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post("signUp")
  async SignUp(@Body() createUserDto: CreateUserDto) {
    return this.authService.signUp(createUserDto);
  }

  @HttpCode(HttpStatus.OK)
  @Post("signin")
  async signin(@Body() loginDto:LoginDto) {
    return this.authService.login(loginDto );
  }
}
