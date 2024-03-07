import {
   Controller, Get, Post
} from '@nestjs/common';
import { ProductService } from './products.service';
 
  @Controller('products')
   export class AppController {
     constructor(
       private readonly productService: ProductService) {}

   @Get()
      get() {
      return this.productService.getAll()
   }
   @Post()
      createProduct() {
      return this.productService.createProduct()
   }
} 