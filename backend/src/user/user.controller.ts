import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Req,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import {
  ApiTags,
  ApiResponse,
  ApiBearerAuth,
  ApiOperation,
  ApiOkResponse,
  ApiBody,
} from '@nestjs/swagger';
import { Roles } from '../auth/decorators/roles.decorator';
import { Role } from '../auth/enums/role.enum';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { Public } from '../auth/decorators/public.decorator';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from '../auth/guards/role.guard';
// import { RolesGuard } from 'src/auth/guards/role.guard';
// import { User } from 'src/schemas/users.schema';

@ApiTags('user')
@ApiBearerAuth() // Add this line to enable bearer token authentication for protected routes
// @UseGuards(JwtAuthGuard)
@UseGuards(AuthGuard('jwt'), RolesGuard)
// @Roles(Role.User) // Add this line to restrict access to admin users only
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @ApiResponse({ status: 201, description: 'User created' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @Public()
  @ApiBody({ type: [CreateUserDto] })
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  @Roles(Role.User) // Add this line to restrict access to admin users only
  @ApiBearerAuth()
  // @Public()
  // @ApiOkResponse({ type: User, isArray: true })
  findAll(@Req() req) {
    return this.userService.findAll();
  }

  @Get(':id')
  // @Roles(Role.Admin) // Add this line to restrict access to admin users only
  @ApiResponse({ status: 200, description: 'User found' })
  @ApiResponse({ status: 404, description: 'User not found' })
  findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }

  @Patch(':id')
  @ApiResponse({ status: 200, description: 'User updated' })
  @ApiResponse({ status: 404, description: 'User not found' })
  @Public()
  update(
    @Req() req,
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    const token = req.headers.authorization?.replace('Bearer ', '');
    return this.userService.update(id, updateUserDto, token);
  }

  @Delete(':id')
  @Public()
  @ApiOperation({ summary: 'Delete a user' })
  @ApiResponse({ status: 200, description: 'User deleted' })
  @ApiResponse({ status: 404, description: 'User not found' })
  delete(@Param('id') id: string) {
    return this.userService.delete(id);
  }
}
