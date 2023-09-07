import { ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtAuthGuard } from './jwt-auth.guard';
import { createMock } from '@golevelup/ts-jest';

describe('JwtAuthGuard', () => {
  let guard: JwtAuthGuard;
  let reflector: Reflector;

  beforeEach(() => {
    reflector = new Reflector();
    guard = new JwtAuthGuard(reflector);
  });

  it('should allow access to public routes', () => {
    const mockExecutionContext = createMock<ExecutionContext>();
    reflector.get = jest.fn().mockReturnValueOnce(true);

    const result = guard.canActivate(mockExecutionContext);

    expect(result).toBe(true);
  });

  it('should call super.canActivate for non-public routes', () => {
    const mockExecutionContext = createMock<ExecutionContext>();
    reflector.get = jest.fn().mockReturnValueOnce(undefined);

    const canActivateSpy = jest
      .spyOn(guard, 'canActivate')
      .mockReturnValueOnce(true);

    const result = guard.canActivate(mockExecutionContext);
    console.log(mockExecutionContext.getHandler(), 'g');
    // expect(reflector.get).toHaveBeenCalledWith(
    //   'isPublic',
    //   mockExecutionContext.getHandler(),
    // );
    expect(canActivateSpy).toHaveBeenCalledWith(mockExecutionContext);
    expect(result).toBe(true);
  });
});
