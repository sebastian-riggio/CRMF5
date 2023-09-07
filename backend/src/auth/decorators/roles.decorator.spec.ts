import { SetMetadata } from '@nestjs/common';
import { Roles, ROLES_KEY } from './roles.decorator';
import { Role } from '../enums/role.enum';

describe('Roles Decorator', () => {
  it('should set metadata with the provided roles', () => {
    const roles: Role[] = [Role.Admin, Role.User];

    const decorator = Roles(...roles);

    expect(decorator).toEqual(expect.any(Function));
    expect(decorator[ROLES_KEY]).toEqual(roles);
  });
});
