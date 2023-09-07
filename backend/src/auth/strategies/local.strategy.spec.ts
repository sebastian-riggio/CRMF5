import { Test } from '@nestjs/testing';
import { UnauthorizedException } from '@nestjs/common';
import { LocalStrategy } from './local.strategy';
import { AuthService } from '../services/auth.service';
import { User } from '../../schemas/users.schema';
import { getModelToken } from '@nestjs/mongoose';
import { JwtService } from '@nestjs/jwt';

describe('LocalStrategy', () => {
  let localStrategy: LocalStrategy;
  let authService: AuthService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        JwtService,
        LocalStrategy,
        AuthService,
        {
          provide: getModelToken(User.name),
          useValue: jest.fn(),
        },
      ],
    }).compile();

    localStrategy = moduleRef.get<LocalStrategy>(LocalStrategy);
    authService = moduleRef.get<AuthService>(AuthService);
  });

  describe('validate', () => {
    it('should return user when valid credentials are provided', async () => {
      // const mockUser = createMock<User>;
      const mockUser: any = { email: 'test@example.com', password: 'password' };
      jest.spyOn(authService, 'validateUser').mockResolvedValue(mockUser);

      const result = await localStrategy.validate(
        mockUser.email,
        mockUser.password,
      );

      expect(result).toEqual(mockUser);
      expect(authService.validateUser).toHaveBeenCalledWith(
        mockUser.email,
        mockUser.password,
      );
    });

    it('should throw UnauthorizedException when invalid credentials are provided', async () => {
      const mockUser = { email: 'test@example.com', password: 'password' };
      jest.spyOn(authService, 'validateUser').mockResolvedValue(null);

      await expect(
        localStrategy.validate(mockUser.email, mockUser.password),
      ).rejects.toThrow(UnauthorizedException);
      expect(authService.validateUser).toHaveBeenCalledWith(
        mockUser.email,
        mockUser.password,
      );
    });
  });
});
