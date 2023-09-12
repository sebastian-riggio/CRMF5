import { Body, Controller, Get, Post, Req, Request, UseGuards } from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import { CreateUserDto } from '../../user/dto/create-user.dto';
import { ApiTags, ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { UserService } from '../../user/user.service';
import { AuthGuard } from '@nestjs/passport';
import { Public } from '../decorators/public.decorator';
import { SignInDto } from '../dto/signin.dto';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private userService: UserService,
  ) {}

  @Public()
  @ApiBody({ type: CreateUserDto }) // Specify the request body schema
  @ApiOperation({ summary: 'User Signup' })
  @ApiResponse({ status: 201, description: 'User created successfully' })
  @Post('signup')
  async signup(@Body() user: CreateUserDto) {
    console.log(user);
    return this.userService.create(user);
  }

  @Public()
  @UseGuards(AuthGuard('local'))
  @ApiBody({ type: SignInDto })
  @Post('login')
  login(@Request() req) {
    return this.authService.generateToken(req.user);
  }
}
