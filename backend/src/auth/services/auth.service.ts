import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { TokenPayload } from '../../schemas/token.model';
import { User } from '../../schemas/users.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    @InjectModel(User.name) private userModel: Model<User>,
  ) {}
  async validateUser(email: string, password: string) {
    const user = await this.userModel
      .findOne({ email })
      .select('+password')
      .exec();
    if (user && (await user.comparePassword(password))) {
      return user;
    }
    return null;
  }

  generateToken(user: Partial<User>) {
    const payload: TokenPayload = {
      email: user.email,
      roles: user.roles,
      sub: user.id,
    };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
