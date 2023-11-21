/* eslint-disable prettier/prettier */
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ImageService } from '../images/images.service';
import { Image } from '../entities/images.entity';
import { CreateImageInput, UpdateImageInput } from '../images/images.input';

@Resolver('Image')
export class ImagesResolver {
  constructor(private readonly imageService: ImageService) {}

  @Query('images')
  async getImages(): Promise<Image[]> {
    return this.imageService.findAll();
  }

  @Query('image')
  async getImage(@Args('id') id: string): Promise<Image> {
    return this.imageService.findOne(id);
  }

  @Mutation('createImage')
  async createImage(@Args('input') input: CreateImageInput): Promise<Image> {
    return this.imageService.create(input);
  }

  @Mutation('updateImage')
  async updateImage(
    @Args('id') id: string,
    @Args('input') input: UpdateImageInput,
  ): Promise<Image> {
    return this.imageService.update(id, input);
  }

  @Mutation('deleteImage')
  async deleteImage(@Args('id') id: string): Promise<Image> {
    return this.imageService.delete(id);
  }
}