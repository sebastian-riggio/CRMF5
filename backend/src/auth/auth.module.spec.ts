import { Test, TestingModule } from '@nestjs/testing';
import { AuthModule } from './auth.module';
import { AuthService } from './services/auth.service';
import { AuthController } from './controllers/auth.controller';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { Role } from './enums/role.enum';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { LocalStrategy } from './strategies/local.strategy';
import { JwtStrategy } from './strategies/jwt.strategy';
import { UserService } from '../user/user.service';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './guards/jwt-auth.guard';


describe('AuthModule', () => {
  let module: TestingModule;

  beforeAll(async () => {
    module = await Test.createTestingModule({
      imports: [
        PassportModule,
        JwtModule.register({
          secret: 'your-secret', // Replace with your actual secret key
          signOptions: {
            expiresIn: '10d',
          },
        }),
        // Other required modules and dependencies
      ],
      controllers: [AuthController],
      providers: [
        AuthService,
        LocalStrategy,
        JwtStrategy,
        UserService,
        {
          provide: APP_GUARD,
          useClass: JwtAuthGuard,
        },
      ],
    }).compile();
  });

  it('should be defined', () => {
    const authModule = module.get<AuthModule>(AuthModule);
    expect(authModule).toBeDefined();
  });

  it('should provide the AuthService', () => {
    const authService = module.get<AuthService>(AuthService);
    expect(authService).toBeDefined();
  });

  it('should provide the AuthController', () => {
    const authController = module.get<AuthController>(AuthController);
    expect(authController).toBeDefined();
  });

  // afterAll(async () => {
  //   await module.close();
  // });
});
