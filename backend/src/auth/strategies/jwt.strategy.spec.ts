import { Test } from '@nestjs/testing';
import { JwtStrategy } from './jwt.strategy';
import { ConfigService } from '@nestjs/config';
import { JwtFromRequestFunction } from 'passport-jwt';

describe('JwtStrategy', () => {
  let jwtStrategy: JwtStrategy;
  let configService: ConfigService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        JwtStrategy,
        {
          provide: ConfigService,
          useValue: {
            get: jest.fn().mockReturnValue('myjwtsecret'),
          },
        },
      ],
    }).compile();

    jwtStrategy = moduleRef.get<JwtStrategy>(JwtStrategy);
    configService = moduleRef.get<ConfigService>(ConfigService);
  });

  describe('constructor', () => {
    // it('should initialize JwtStrategy with correct options', () => {
    //   const jwtFromRequest: JwtFromRequestFunction = jest.spyOn(jwtStrategy, 'jwtFromRequest') as any;
    //   const secretOrKey: string | Buffer = jest.spyOn(jwtStrategy, 'secretOrKey') as any;
    //   expect(jwtFromRequest).toHaveBeenCalledWith(expect.any(Function));
    //   expect(secretOrKey).toBe(configService.get('JWT_SECRET'));
    //   expect(jwtStrategy.ignoreExpiration).toBe(false);
    // });
  });

  describe('validate', () => {
    it('should return the payload as is', () => {
      const payload = { sub: 'user-id', email: 'test@example.com' };
      const result = jwtStrategy.validate(payload);

      expect(result).toEqual(payload);
    });
  });
});
