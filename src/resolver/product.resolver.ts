/* eslint-disable prettier/prettier */
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ProductService } from '../products/product.service';
import { Product } from '../entities/product.entity';
import { CreateProductInput, UpdateProductInput } from '../products/product.input';

@Resolver('Product')
export class ProductsResolver {
  constructor(private readonly productService: ProductService) {}

  @Query('products')
  async getProducts(): Promise<Product[]> {
    return this.productService.findAll();
  }

  @Query('product')
  async getProduct(@Args('id') id: string): Promise<Product> {
    return this.productService.findOne(id);
  }

  @Mutation('createProduct')
  async createProduct(@Args('input') input: CreateProductInput): Promise<Product> {
    return this.productService.create(input);
  }

  @Mutation('updateProduct')
  async updateProduct(
    @Args('id') id: string,
    @Args('input') input: UpdateProductInput,
  ): Promise<Product> {
    return this.productService.update(id, input);
  }

  @Mutation('deleteProduct')
  async deleteProduct(@Args('id') id: string): Promise<Product> {
    return this.productService.delete(id);
  }
}