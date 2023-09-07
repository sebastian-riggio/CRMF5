import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from './auth.controller';
import { AuthService } from '../services/auth.service';
import { UserService } from '../../user/user.service';
import { getModelToken } from '@nestjs/mongoose';
import { User } from '../../schemas/users.schema';
import { CreateUserDto } from 'src/user/dto/create-user.dto';

describe('AuthController', () => {
  let controller: AuthController;
  let userService: UserService;
  const mockAuthService = {
    generateToken: jest
      .fn()
      .mockReturnValue(Promise.resolve({ access_token: 'token here' })),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [
        AuthService,
        UserService,
        {
          provide: getModelToken(User.name),
          useValue: jest.fn(),
        },
      ],
    })
      .overrideProvider(AuthService)
      .useValue(mockAuthService)
      .compile();

    controller = module.get<AuthController>(AuthController);
    userService = module.get<UserService>(UserService);
    console.log(userService);
  });

  describe('signup', () => {
    it('should create a new user', async () => {
      const createdUser: any = {
        id: '1',
        name: 'John Doe',
        user_name: 'johndoe',
        password: 'password123',
        email: 'johndoe@example.com',
        wallet_balance: 100,
        
      };
      jest.spyOn(userService, 'create').mockResolvedValue(createdUser);

      const result = await controller.signup(createdUser);

      expect(userService.create).toHaveBeenCalledWith(createdUser);
      expect(createdUser).toBe(result);
    });
  });

  describe('login', () => {
    it('should generate a token for the authenticated user', async () => {
      // Create a mock Request object
      const req: any = {
        get: jest.fn(),
        header: jest.fn(),
        accepts: jest.fn(),
        acceptsCharsets: jest.fn(),
        // ... add other required properties and methods here
        user: {
          id: 1,
          username: 'johndoe',
        },
      };
      const generatedToken = {
        access_token: 'token here',
      };
      expect(await controller.login(req.user)).toMatchObject(generatedToken);
    });
  });
});
