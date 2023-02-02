import App from '@/app';
import validateEnv from '@utils/validateEnv';

import { authResolver } from '@resolvers/auth.resolver';
import { userResolver } from '@resolvers/users.resolver';
import { companyResolver } from '@/resolvers/companies.resolver';

validateEnv();

const app = new App([authResolver, userResolver, companyResolver]);

app.listen();
