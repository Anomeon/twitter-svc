import { getConnection } from 'typeorm';
import { buildSchema } from 'graphql';
import { RawTweet } from '../entities/RawTweet';
import { Tweet } from '../types/Tweet';

export const graphqlSchema = buildSchema(`
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

export const rootQuery = {
  tweets: async (): Promise<Tweet[]> => {
    const rawTweetRepository = getConnection().getRepository(RawTweet);
    const savedRawTweets = await rawTweetRepository
      .createQueryBuilder()
      .limit(10)
      .getMany();

    // TODO add response mapper
    return savedRawTweets.map((tweet) => ({
      id: tweet.data.id,
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
      place: tweet.data.place,
      id_str: tweet.data.id_str,
      entities: tweet.data.entities,
      coordinates: tweet.data.coordinates,
      contributors: tweet.data.contributors,
    }));
  },
};
