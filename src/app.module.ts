import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { PrismaService } from './prisma.service';
import { ProductService } from './products.service';
@Module({
  controllers: [AppController],
  providers: [ProductService, PrismaService],
  imports: [ConfigModule.forRoot()],
})
export class AppModule {}