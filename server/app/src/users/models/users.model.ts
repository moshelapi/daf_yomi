import { ObjectType, Field, ID, Float, Int } from '@nestjs/graphql';

@ObjectType()
export class UserType {
  @Field(() => ID)
  id: number;

  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  email: string;

  @Field()
  password: string;

  @Field(() => Float)
  latitude: number;

  @Field(() => Float)
  longitude: number;

  @Field()
  time: string;

  @Field()
  title: string;

  @Field()
  city: string;

  @Field()
  street: string;

  @Field(() => Int)
  age: number;
}