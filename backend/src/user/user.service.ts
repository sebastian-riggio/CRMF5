import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel, getModelToken } from '@nestjs/mongoose';
import { User } from '../schemas/users.schema';
import { Model } from 'mongoose';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
    private readonly jwtService: JwtService, // Inject JwtService
  ) {}
  async create(createUserDto: CreateUserDto): Promise<User> {
    try {
      console.log(createUserDto);
      const createdUser = await this.userModel.create(createUserDto);
      return createdUser;
    } catch (error) {
      if (error.code === 11000) {
        throw new HttpException(
          'Email or username already exists',
          HttpStatus.CONFLICT,
        );
      }
    }
  }
  async findAll(): Promise<User[]> {
    const res = await this.userModel.find();
    return res
  }
  async findOne(id: string): Promise<User> {
    return this.userModel.findOne({ _id: id }).exec();
  }
  async update(id: string, updateUserDto: UpdateUserDto, token: string) {
    const user = await this.userModel.findById(id);
    console.log(token, 'dsdsdsd');
    if (!user) {
      throw new HttpException('User not Found', HttpStatus.BAD_REQUEST);
    }
    // Verify if the user making the request is the owner of the account
    const decodedToken = this.jwtService.verify(token); // Verify the JWT token
    if (user.id !== decodedToken.sub) {
      throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
    }
    // user.name = updateUserDto.name;
    Object.assign(user, updateUserDto);

    const updatedUser = await user.save();
    return updatedUser;
  }

  async delete(id: string) {
    const deletedUser = await this.userModel
      .findByIdAndRemove({ _id: id })
      .exec();
    if (!deletedUser) {
      throw new HttpException('User not Found', HttpStatus.BAD_REQUEST);
    }
    return deletedUser;
  }
}
