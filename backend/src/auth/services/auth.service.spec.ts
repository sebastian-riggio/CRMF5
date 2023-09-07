import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { getModelToken } from '@nestjs/mongoose';
import { User } from '../../schemas/users.schema';
import { Model } from 'mongoose';
import { JwtService } from '@nestjs/jwt';

describe('AuthService', () => {
  let service: AuthService;
  let jwtService: JwtService;
  let userModel: Model<any>; // Replace 'any' with the appropriate type for your User model

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        {
          provide: JwtService,
          useValue: {
            sign: jest.fn(),
          },
        },
        {
          provide: getModelToken(User.name),
          useValue: {
            findOne: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<AuthService>(AuthService);
    jwtService = module.get<JwtService>(JwtService);
    userModel = module.get<Model<any>>(getModelToken(User.name));
  });

  describe('validateUser', () => {
    it('should return the user when email and password match', async () => {
      const email = 'test@example.com';
      const password = 'password123';

      const user = { email, password, comparePassword: jest.fn(() => true) };

      jest.spyOn(userModel, 'findOne').mockReturnValueOnce({
        select: jest.fn().mockReturnThis(),
        exec: jest.fn().mockResolvedValueOnce(user),
      } as any);

      const result = await service.validateUser(email, password);

      expect(userModel.findOne).toHaveBeenCalledWith({ email });
      expect(result).toEqual(user);
    });

    it('should return null when email and password do not match', async () => {
      const email = 'test@example.com';
      const password = 'password123';

      jest.spyOn(userModel, 'findOne').mockReturnValueOnce({
        select: jest.fn().mockReturnThis(),
        exec: jest.fn().mockResolvedValueOnce(null),
      } as any);

      const result = await service.validateUser(email, password);

      expect(userModel.findOne).toHaveBeenCalledWith({ email });
      expect(result).toBeNull();
    });
  });
});
