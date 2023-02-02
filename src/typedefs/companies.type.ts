import { Field, ObjectType } from 'type-graphql';

@ObjectType()
export class Company {
  @Field()
  id: number;

  @Field()
  name: string;

  @Field()
  description: string;
}
