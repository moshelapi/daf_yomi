import { InputType, Int, Field, ObjectType, ID, Float } from '@nestjs/graphql';
import { IsEmail, IsInt, IsNotEmpty, IsString, Length, Min, Max } from 'class-validator';

@InputType()
export class CreateUserInput {

  @Field()
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @Field()
  @IsString()
  @IsNotEmpty()
  lastName: string;

  @Field()
  @IsEmail()
  email: string;

  @Field()
  @IsString()
  @Length(8, 30)
  password: string;

  @Field(() => Float)
  @IsNotEmpty()
  latitude: number;

  @Field(() => Float)
  @IsNotEmpty()
  longitude: number;

  @Field()
  @IsString()
  time: string;

  @Field()
  @IsString()
  @IsNotEmpty()
  title: string;

  @Field()
  @IsString()
  city: string;

  @Field()
  @IsString()
  street: string;

  @Field(() => Int)
  @IsInt()
  @Min(0)
  age: number;
}
