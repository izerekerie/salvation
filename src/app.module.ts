import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { PrismaService } from './prisma/prisma.service';
import { UsersService } from './users/users.service';
import { ConfigModule } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { WarfareModule } from './warfare/warfare.module';
import { WarfareService } from './warfare/warfare.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Makes ConfigModule available globally
    }),

    UsersModule,
    AuthModule,
    WarfareModule,
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService, UsersService, WarfareService],
})
export class AppModule {}
