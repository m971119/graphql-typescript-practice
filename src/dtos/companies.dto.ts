import { IsString, Length } from 'class-validator';
import { InputType, Field } from 'type-graphql';
import { Company } from '@/interfaces/companies.interface';

@InputType()
export class CreateCompanyDto implements Partial<Company> {
  @Field()
  @IsString()
  name: string;

  @Field()
  @IsString()
  @Length(10, 50)
  description: string;
}
