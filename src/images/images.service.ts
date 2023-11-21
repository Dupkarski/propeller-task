/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Image } from '../entities/images.entity';
import { CreateImageInput, UpdateImageInput } from './images.input';

@Injectable()
export class ImageService {
  constructor(
    @InjectRepository(Image)
    private readonly imageRepository: Repository<Image>,
  ) {}

  findAll(): Promise<Image[]> {
    return this.imageRepository.find();
  }

  async findOne(id): Promise<Image> {
    const image = await this.imageRepository.findOne(id);
    return image;
  }

  async create(input: CreateImageInput): Promise<Image> {
    const image = this.imageRepository.create(input);
    return this.imageRepository.save(image);
  }

  async update(id, input: UpdateImageInput): Promise<Image> {
    await this.imageRepository.update(id, input);
    return this.imageRepository.findOne(id);
  }

  async delete(id): Promise<Image> {
    const image = await this.imageRepository.findOne(id);
    await this.imageRepository.delete(id);
    return image;
  }
}