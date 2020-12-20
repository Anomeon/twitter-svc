import { TweetIndice } from './TweetIndice';
import { TweetUser } from './TweetUser';
import { TweetUrl } from './TweetUrl';

/* Common types */

export type Longitude = number;
export type Latitude = number;

export type GeoJsonCoordinate = [Longitude, Latitude];

export type Coordinate = {
  сoordinates: GeoJsonCoordinate;
  type: string;
};

export type SizeDemension = {
  w: number;
  s: number;
  resize: string;
};

export type Size = {
  thumb: SizeDemension;
  medium: SizeDemension;
  small: SizeDemension;
  large: SizeDemension;
};

/* Entity types */

export type Hashtag = {
  text: string;
  indices: TweetIndice;
};

export type Symbol = {
  text: string;
  indices: TweetIndice;
};

export type UserMention = {
  screen_name: string;
  name: string;
  id: number;
  id_str: string;
  indices: TweetIndice;
};

export type Media = {
  id: number;
  is_str: string;
  indices: TweetIndice;
  media_url: string;
  media_url_https: string;
  url: string;
  display_url: string;
  expanded_url: string;
  type: string;
  sizes: Size;
};

/* Tweet types */

export type Entity = {
  hashtags: Hashtag[];
  symbols: symbol[];
  user_mentions: UserMention[];
  urls: TweetUrl[];
  media: Media[];
};

export type ExtendedEntity = {
  media: Media[];
};

export type Attribute = Record<string, unknown>;

export type DotCoordinate = [number, number];

export type BoundingBox = {
  coordinates: DotCoordinate[][];
  type: string;
};

/* https://developer.twitter.com/en/docs/twitter-api/v1/data-dictionary/overview/geo-objects#place-dictionary */
export type Place = {
  id: string;
  url: string;
  place_type: string;
  name: string;
  full_name: string;
  country_code: string;
  country: string;
  bounding_box: BoundingBox;
  attributes: Attribute;
};

export type Geo = [Latitude, Longitude];

export type Permalink = { url: string; expanded: string; display: string };

// https://developer.twitter.com/en/docs/twitter-api/v1/data-dictionary/overview/tweet-object

export type Tweet = {
  id: number;
  geo: Geo | null;
  lang: string | null;
  text: string;
  user: TweetUser;
  place: Place | null;
  id_str: string;
  source: string;
  entities: Entity;
  favorited: boolean | null;
  retweeted: boolean;
  truncated: boolean;
  created_at: Date;
  coordinates: Coordinate | null;
  contributors: null;
  retweet_count: number;
  favorite_count: number | null;
  is_quote_status: boolean;
  in_reply_to_user_id: number | null;
  in_reply_to_status_id: number | null;
  in_reply_to_screen_name: string | null;
  in_reply_to_user_id_str: string | null;
  in_reply_to_status_id_str: string | null;
};
