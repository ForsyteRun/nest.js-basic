
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Products } from './products.entity';

@Injectable()
export class productsService {
  constructor(
    @InjectRepository(Products)
    private productsRepository: Repository<Products>,
  ) {}

  findAll(): Promise<Products[]> {
    return this.productsRepository.find();
  }

  findOne(id: number): Promise<Products | null> {
    return this.productsRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.productsRepository.delete(id);
  }
}