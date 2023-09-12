import {
  IsEmail,
  IsNotEmpty,
  IsString,
  IsNumber,
  IsDate,
  IsOptional,
  IsArray,
  IsDateString,
} from 'class-validator';
import { ApiProperty, ApiQuery } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { Role } from '../../auth/enums/role.enum';

export class CreateUserDto {

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  user_name: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  password: string;

  @ApiProperty({
    example:  'email@email.com'
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty()
  @IsOptional()
  @IsArray()
  @ApiProperty({ enum: Role, enumName: 'User Roles'})
  // @ApiQuery({ name: 'role', enum: Role })
  @Transform((value) => (value === undefined ? [] : value))
  roles?: Role[];
}
