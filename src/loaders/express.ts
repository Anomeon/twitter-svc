import { Request, Response, Express } from 'express';
import { getConnection } from 'typeorm';
import bodyParser from 'body-parser';
import { graphqlSchema, rootQuery } from '../schemas';
import { graphqlHTTP } from 'express-graphql';

export const expressLoader = ({
  expressApp,
}: {
  expressApp: Express;
}): void => {
  expressApp.use(bodyParser.json());

  // TODO move to routes
  expressApp.post('/sql', async (req: Request, res: Response) => {
    const data = await getConnection().manager.query(req.body.sql);
    res.send({ data });
  });

  expressApp.use(
    '/graphql',
    graphqlHTTP({
      schema: graphqlSchema,
      rootValue: rootQuery,
      graphiql: true,
    }),
  );
};
