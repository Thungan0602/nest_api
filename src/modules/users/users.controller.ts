import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { Auth } from '../../common/decorators/auth.decorator';

@Controller()
@Auth()
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get('/users')
  getUsers(@Query('q') q?: string) {
    return this.usersService.users(q);
  }

  @Post('/users')
  createUser(@Body() data: CreateUserDto) {
    return this.usersService.createUser(data);
  }

  @Put('/users/:id')
  updateUser(@Param('id') id: string, @Body() data: UpdateUserDto) {
    return this.usersService.updateUser(id, data);
  }

  @Delete('/users/:id')
  deleteUser(@Param('id') id: string) {
    return this.usersService.deleteUser(id);
  }
}