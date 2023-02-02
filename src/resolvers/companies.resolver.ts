import { Arg, Mutation, Query, Resolver } from 'type-graphql';
import { CreateCompanyDto } from '@dtos/companies.dto';
import CompanyRepository from '@repositories/companies.repository';
import { Company } from '@typedefs/companies.type';

@Resolver()
export class companyResolver extends CompanyRepository {
  @Query(() => [Company], {
    description: 'Company find list',
  })
  async getCompanies(): Promise<Company[]> {
    const companies: Company[] = await this.companyFindAll();
    return companies;
  }

  @Query(() => Company, {
    description: 'Company find by id',
  })
  async getCompanyById(@Arg('companyId') companyId: number): Promise<Company> {
    const company: Company = await this.companyFindById(companyId);
    return company;
  }

  @Mutation(() => Company, {
    description: 'Company create',
  })
  async createCompany(@Arg('companyData') companyData: CreateCompanyDto): Promise<Company> {
    const company: Company = await this.companyCreate(companyData);
    return company;
  }

  @Mutation(() => Company, {
    description: 'Company update',
  })
  async updateCompany(@Arg('companyId') companyId: number, @Arg('companyData') companyData: CreateCompanyDto): Promise<Company> {
    const company: Company = await this.companyUpdate(companyId, companyData);
    return company;
  }

  @Mutation(() => Company, {
    description: 'Company delete',
  })
  async deleteCompany(@Arg('companyId') companyId: number): Promise<Company> {
    const company: Company = await this.companyDelete(companyId);
    return company;
  }
}
