import { Field, ObjectType } from 'type-graphql';
import { Company } from './companies.type';

@ObjectType()
export class User {
  @Field()
  id: number;

  @Field()
  email: string;

  @Field()
  password: string;

  @Field()
  company?: Company;
}
