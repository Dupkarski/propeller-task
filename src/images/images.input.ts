/* eslint-disable prettier/prettier */
import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateImageInput {
  @Field()
  url: string;

  @Field({ defaultValue: 1000 })
  priority: number;
}

@InputType()
export class UpdateImageInput {
  @Field({ nullable: true })
  url?: string;

  @Field({ nullable: true })
  priority?: number;
}