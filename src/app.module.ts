import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { Products } from './products/products.entity';
@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 4321,
    username: 'postgres',
    password: 'root',
    database: 'test',
    entities: [Products],
    synchronize: true,
  }), ProductsModule],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}

