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
import { faker } from '@faker-js/faker';

export class CreateUserDto {

  @ApiProperty({
    example: faker.person.fullName()
  })
  @IsNotEmpty()
  @IsString()
  name: string;

  // @ApiProperty()
  // @IsString()
  // @IsNotEmpty()
  // user_name: string;
  @ApiProperty({
    example: faker.company.buzzPhrase()
  })
  @IsString()
  @IsNotEmpty()
  area: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  password: string;
  
  @ApiProperty({
    example: faker.commerce.department()
  })
  @IsString()
  @IsNotEmpty()
  departamento: string;

  @ApiProperty({
    example: faker.date.past()
  })
  @IsDate()
  @IsNotEmpty()
  inicioActividad: Date;
  
  @ApiProperty({
    example: faker.phone.number()
  })
  @IsString()
  @IsNotEmpty()
  telefono: string;

  @ApiProperty({
    example: faker.internet.email()
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
