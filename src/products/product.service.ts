/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from '../entities/product.entity';
import { CreateProductInput, UpdateProductInput } from './product.input';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  findAll(): Promise<Product[]> {
    return this.productRepository.find({ relations: ['images'] });
  }

  async findOne(id: string): Promise<Product> {
    const product = await this.productRepository.findOne({ where: { id }, relations: ['images'] });
    return product;
  }

  async create(input: CreateProductInput): Promise<Product> {
    const product = this.productRepository.create(input);
    return this.productRepository.save(product);
  }

  async update(id: string, input: UpdateProductInput): Promise<Product> {
    await this.productRepository.update(id, input);
    return this.productRepository.findOne( { relations: ['images'] });
  }

  async delete(id: string): Promise<Product> {
    const product = await this.productRepository.findOne( { relations: ['images'] });
    await this.productRepository.delete(id);
    return product;
  }
}