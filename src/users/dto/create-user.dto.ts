import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString, IsStrongPassword } from "class-validator";

export class CreateUserDto {
  @ApiProperty({ example: "User1", description: "Foydalanuvchi ismi" })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    example: "User1@mail.uz",
    description: "Foydalanuvchi emaili",
  })
  @IsEmail()
  email: string;

  @ApiProperty({ example: "Uzbek!$t0n", description: "Foydalanuvchi paroli" })
  @IsStrongPassword({ minLength: 6, minSymbols:0 })
  password: string;
}
