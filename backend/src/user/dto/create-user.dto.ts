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
import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';

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

  @ApiProperty()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  /* @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  wallet_balance: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsArray()
  id_published_content: number[];

  @ApiProperty()
  @IsNotEmpty()
  @IsArray()
  id_bought_content: number[];
 */
  @ApiProperty()
  @IsOptional()
  @IsDate()
  created_at?: Date;

  @ApiProperty()
  @IsOptional()
  @IsDate()
  created_update?: Date;

  @ApiProperty()
  @IsOptional()
  @IsArray()
  @Transform((value) => (value === undefined ? [] : value))
  roles?: string[];
}
