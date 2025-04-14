import { Module } from '@nestjs/common';
import { UsersModule } from './modules/users/users.module';
import { PrismaModule } from 'nestjs-prisma';
import { ToursModule } from './modules/tours/tours.module';


@Module({
  imports: [PrismaModule.forRoot({ isGlobal: true }), UsersModule, ToursModule],
})
export class AppModule { }