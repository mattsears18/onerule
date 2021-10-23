# Rule Maker

[https://rulemaker.io](https://rulemaker.io)

An open-source platform for making rules.

# TODO

- [ ] Seetup Hasura Backend
  - [x] Docker setup
  - [ ] Auth0 setup
    - https://auth0.com/blog/building-a-collaborative-todo-app-with-realtime-graphql-using-hasura/
  - [ ] Define schema - model types and relationships
- [ ] Setup initial client app
  - [x] `npx create-react-app --template typescript`
  - [x] `yarn add @apollo/client graphql`
  - [x] setup apollo w typescript
    - https://www.apollographql.com/docs/react/development-testing/static-typing/
  - [ ] Connect client to api DB
  - [ ] Setup graphql codeegen
    - [ ] Determine whether to use `apollo-codegen` or `graphql-codegen`
      - `yarn add @graphql-codegen/cli @graphql-codegen/introspection @graphql-codegen/typescript @graphql-codegen/typescript-operations @graphql-codegen/typescript-react-apollo`
  - [ ] Config
    - [ ] ESLint
    - [ ] Prettier
    - [ ] Codecov
    - [ ] Jest
    - [ ] Cypress
  - [ ] Auth0 setup
  - [ ] Pages
    - [ ] Home
    - [ ] Account Settings (Auth0)
      - [ ] Sign Up, Sign In, Change password, etc.
    - [ ] CRUDL Users
    - [ ] CRUDL Rules
