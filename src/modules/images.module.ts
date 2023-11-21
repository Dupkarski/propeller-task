/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Image } from '../entities/images.entity';
import { ImageService } from '../images/images.service';
import { ImagesResolver } from '../resolver/images.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Image])],
  providers: [ImageService, ImagesResolver],
})
export class ImagesModule {}