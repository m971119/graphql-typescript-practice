# GraphQL + Typescript Practice

This is a simple project initally created via package [typescript-express-starter](https://www.npmjs.com/package/typescript-express-starter) - graphql template.

## Project Info
- Contains 2 entities: `Company` and `User` (one-to-many relation)
- operates authentication and CRUD via graphql API

## Set up env config
```
cp .env.example .env.development.local
```
> Other env: `.env.test.local`, `.env.production.local`

## Develop
- call `npm run dev` and visit `localhost:${PORT}/graphql`


## Linting
- `npm run lint` - detect lint problems by eslint
- `npm run lint:fix` - fix lint errors automatically
- VScode extensions:
  1. [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
  2. [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

## Related Resources
- [TypeORM Doc](https://typeorm.io/)
- [GraphQL Doc](https://graphql.org/)
- [Appollo Server Doc](https://www.apollographql.com/docs/apollo-server/)

## TODO
-  TypeORM: Load relation after `save()` or `create()` instead of querying it (using `find({ relation: ... })`) once again
- make a command to create interface/entity/repository files and write default content
