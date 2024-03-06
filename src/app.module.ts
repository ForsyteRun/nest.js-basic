import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://forsyterun:C6oTJ8IchNbIE65D@jewerly.eum5syn.mongodb.net/jewerly?retryWrites=true&w=majority',
    ),
    UsersModule,
    ProductsModule,
  ],
})
export class AppModule {}
