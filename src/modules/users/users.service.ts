import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  users(q?: string) {
    return this.prisma.user.findMany({
      where: {
        id: {
          contains: q,
        },
      },
    });
  }

  createUser(user: CreateUserDto) {
    return this.prisma.user.create({
      data: user,
    });
  }

  updateUser(id: string, user: UpdateUserDto) {
    return this.prisma.user.update({
      where: {
        id: id,
      },
      data: {
        name: user.name,
      },
    });
  }

  deleteUser(id: string) {
    return this.prisma.user.delete({
      where: {
        id: id,
      },
    });
  }
}