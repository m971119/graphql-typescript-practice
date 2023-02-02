import { EntityRepository } from 'typeorm';
import { CreateCompanyDto } from '@dtos/companies.dto';
import { CompanyEntity } from '@entities/companies.entity';
import { HttpException } from '@exceptions/HttpException';
import { Company } from '@interfaces/companies.interface';
import { isEmpty } from '@utils/util';

@EntityRepository()
export default class CompanyRepository {
  public async companyFindAll(): Promise<Company[]> {
    const companies: Company[] = await CompanyEntity.find();
    return companies;
  }

  public async companyFindById(companyId: number): Promise<Company> {
    if (isEmpty(companyId)) throw new HttpException(400, 'UserId is empty');

    const company: Company = await CompanyEntity.findOne({
      where: { id: companyId },
    });
    if (!company) throw new HttpException(409, "Company doesn't exist");

    return company;
  }

  public async companyCreate(companyData: CreateCompanyDto): Promise<Company> {
    if (isEmpty(companyData)) throw new HttpException(400, 'companyData is empty');

    const findCompany: Company = await CompanyEntity.findOne({ where: { name: companyData.name } });
    if (findCompany) throw new HttpException(409, `This company ${companyData.name} already exists`);

    const createCompanyData: Company = await CompanyEntity.create({ ...companyData }).save();

    return createCompanyData;
  }

  public async companyUpdate(companyId: number, companyData: CreateCompanyDto): Promise<Company> {
    if (isEmpty(companyData)) throw new HttpException(400, 'companyData is empty');

    const findCompany: Company = await CompanyEntity.findOne({ where: { id: companyId } });
    if (!findCompany) throw new HttpException(409, "Company doesn't exist");

    await CompanyEntity.update(companyId, { ...companyData });

    const updatedCompany: Company = await CompanyEntity.findOne({ where: { id: companyId } });

    return updatedCompany;
  }

  public async companyDelete(companyId: number): Promise<Company> {
    if (isEmpty(companyId)) throw new HttpException(400, "Company doesn't existId");

    const findCompany: Company = await CompanyEntity.findOne({ where: { id: companyId } });
    if (!findCompany) throw new HttpException(409, "Company doesn't exist");

    await CompanyEntity.delete({ id: companyId });
    return findCompany;
  }
}
