import { Test, TestingModule } from '@nestjs/testing';
import { ExecutionContext, ForbiddenException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { RolesGuard } from './role.guard';
import { UserService } from '../../user/user.service';
import { Role } from '../enums/role.enum';
import { createMock } from '@golevelup/ts-jest';

describe('RolesGuard', () => {
  let guard: RolesGuard;
  let reflector: Reflector;
  let userService: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        RolesGuard,
        Reflector,
        {
          provide: UserService,
          useValue: {
            findOne: jest.fn(),
          },
        },
      ],
    }).compile();

    guard = module.get<RolesGuard>(RolesGuard);
    reflector = module.get<Reflector>(Reflector);
    userService = module.get<UserService>(UserService);
  });

  describe('canActivate', () => {
    it('should return true if no required roles are specified', async () => {
      jest.spyOn(reflector, 'getAllAndOverride').mockReturnValueOnce(undefined);

      const mockExecutionContext = createMock<ExecutionContext>();

      const result = await guard.canActivate(mockExecutionContext);
      expect(mockExecutionContext.switchToHttp()).toBeDefined();
      expect(reflector.getAllAndOverride).toHaveBeenCalled();
      expect(result).toBe(true);
    });

    it('should return true if the user has the required role', async () => {
      const requiredRoles: Role[] = [Role.Admin];

      jest
        .spyOn(reflector, 'getAllAndOverride')
        .mockReturnValueOnce(requiredRoles);

      const contextMock = createMock<ExecutionContext>();
      const user: any = { id: 'user-id', roles: [Role.Admin] };

      const findOneSpy = jest
        .spyOn(userService, 'findOne')
        .mockResolvedValueOnce(user);

      const result = await guard.canActivate(contextMock);

      expect(reflector.getAllAndOverride).toHaveBeenCalled();
      expect(findOneSpy).toHaveBeenCalledWith(user.sub);
      expect(result).toBe(true);
    });

    it('should throw ForbiddenException if the user does not have the required role', async () => {
      const requiredRoles: Role[] = [Role.Admin];

      jest
        .spyOn(reflector, 'getAllAndOverride')
        .mockReturnValueOnce(requiredRoles);

      const contextMock = createMock<ExecutionContext>();
      const user: any = { id: 'user-id', roles: [Role.User] };

      const findOneSpy = jest
        .spyOn(userService, 'findOne')
        .mockResolvedValueOnce(user);

      await expect(guard.canActivate(contextMock)).rejects.toThrow(
        ForbiddenException,
      );

      expect(reflector.getAllAndOverride).toHaveBeenCalled();
      expect(findOneSpy).toHaveBeenCalledWith(user.sub);
    });

    it('should throw ForbiddenException if requiredRoles is an empty array', async () => {
      const requiredRoles: Role[] = [];

      jest
        .spyOn(reflector, 'getAllAndOverride')
        .mockReturnValueOnce(requiredRoles);

      const contextMock = createMock<ExecutionContext>();

      await expect(guard.canActivate(contextMock)).rejects.toThrow(
        ForbiddenException,
      );

      expect(reflector.getAllAndOverride).toHaveBeenCalled();
    });
  });
});
