import { buildSchema } from 'graphql';
import { graphqlHTTP } from 'express-graphql';

import { createConnection, Connection } from 'typeorm';
import { RawTweet } from './entities/RawTweet';

import express from 'express';
import bodyParser from 'body-parser';

const app = express();

const schema = buildSchema(`
  type User {
    name: String
  }

  type Tweet {
    id: ID
    lang: String
    text: String
    user: User!
    source: String
    favorited: Boolean
    retweeted: Boolean
    truncated: Boolean
    created_at: String
    retweet_count: Int
    favorite_count: Int
    is_quote_status: Boolean
    in_reply_to_user_id: Int
    in_reply_to_status_id: Int
    in_reply_to_screen_name: String
    in_reply_to_user_id_str: String
    in_reply_to_status_id_str: String
  }

  type Query {
    tweets: [Tweet!]!
  }
`);

(async () => {
  let connection: Connection;
  try {
    connection = await createConnection();
  } catch (error) {
    console.log(error);
    return;
  }

  const root = {
    tweets: async () => {
      const rawTweetRepository = connection.getRepository(RawTweet);
      const savedRawTweets = await rawTweetRepository
        .createQueryBuilder()
        .limit(10)
        .getMany();
      return savedRawTweets.map((tweet) => ({
        id: tweet.id,
        geo: tweet.data.geo,
        lang: tweet.data.lang,
        text: tweet.data.text,
        user: tweet.data.user,
        source: tweet.data.source,
        favorited: tweet.data.favorited,
        retweeted: tweet.data.retweeted,
        truncated: tweet.data.truncated,
        created_at: tweet.data.created_at,
        retweet_count: tweet.data.retweet_count,
        favorite_count: tweet.data.favorite_count,
        is_quote_status: tweet.data.is_quote_status,
        in_reply_to_user_id: tweet.data.in_reply_to_user_id,
        in_reply_to_status_id: tweet.data.in_reply_to_status_id,
        in_reply_to_screen_name: tweet.data.in_reply_to_screen_name,
        in_reply_to_user_id_str: tweet.data.in_reply_to_user_id_str,
        in_reply_to_status_id_str: tweet.data.in_reply_to_status_id_str,
      }));
    },
  };

  app.use(bodyParser.json());

  app.post('/sql', async (req, res) => {
    const data = await connection.manager.query(req.body.sql);
    res.send({ data });
  });

  app.use(
    '/graphql',
    graphqlHTTP({
      schema,
      rootValue: root,
      graphiql: true,
    }),
  );

  app.listen(4000);
})();
