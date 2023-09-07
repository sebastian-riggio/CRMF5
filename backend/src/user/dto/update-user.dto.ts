import { OmitType, PartialType } from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(
  OmitType(CreateUserDto, [/* 'wallet_balance' */, 'name', 'email', 'password']),
) {
  token: string;
}
