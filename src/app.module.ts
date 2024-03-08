import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { RolesController } from './roles/roles.controller';
import { Roles } from './roles/roles';
import { RolesModule } from './roles/roles.module';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: `.${process.env.NODE_ENV}.env` }),
    MongooseModule.forRoot(process.env.MONGO_DB),
    UsersModule,
    ProductsModule,
    RolesModule,
  ],
  controllers: [RolesController],
  providers: [Roles],
})
export class AppModule {}
