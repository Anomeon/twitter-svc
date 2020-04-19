import { buildSchema } from 'graphql';
import express from 'express';
import graphqlHTTP from 'express-graphql';

const app = express();

const schema = buildSchema(`
  type User {
    id: Int,
    name: String,
    email: String
  }

  type Query {
    user: User
  }
`);

class User {
  id: Number;
  name: String;
  email: String;

  constructor() {
    this.id = 1;
    this.name = 'Dan';
    this.email = 'danuy@list.ru';
  }
}

const root = {
  user: () => {
    return new User();
  },
};

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true,
  }),
);

app.listen(4000);
