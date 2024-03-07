import { Injectable } from '@nestjs/common';
import { Product } from '@prisma/client';
import { PrismaService } from './prisma.service';

@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) {}

  async getAll(
  ): Promise<Product[] | null> {
    return this.prisma.product.findMany({})
  }

  async createProduct(
  ): Promise<Product | null> {
    try {

      const newProduct = await this.prisma.product.create({
      data: {
        name: 'Ivan2345678f',
        email: 're@fdf.ru'
      }
    })
    return newProduct
  } catch(error) {
    return error
  }

  }
}