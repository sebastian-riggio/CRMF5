import {
  Injectable,
  CanActivate,
  ExecutionContext,
  ForbiddenException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Role } from '../enums/role.enum';
import { UserService } from '../../user/user.service';
export const ROLES_KEY = 'roles';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector, private userService: UserService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    console.log(requiredRoles, 'rroles');
    try {
      if (!requiredRoles) {
        return true;
      }
      const { user } = context.switchToHttp().getRequest();
      const foundUser = await this.userService.findOne(user.sub);

      const hasRequiredRoles = foundUser.roles.some((role) =>
        requiredRoles.includes(role),
      );
      if (!hasRequiredRoles) {
        throw new ForbiddenException('You do not have permissions');
      }
      return true;
    } catch (error) {
      throw new ForbiddenException(`error ${error}`);
    }
  }
}
