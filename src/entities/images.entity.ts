/* eslint-disable prettier/prettier */
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Product } from './product.entity';

@Entity()
// eslint-disable-next-line prettier/prettier
export class Image {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  url: string;

  @Column({ default: 1000 })
  priority: number;

  @ManyToOne(() => Product, (product) => product.images)
  product: Product;
}
