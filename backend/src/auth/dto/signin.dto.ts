import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class SignInDto {
  @IsNotEmpty()
  @IsEmail()
  @ApiProperty({example: 'email@email.com'})
  email: string;

  @IsNotEmpty()
  @ApiProperty({ example: 'secret'})
  password: string;
}
