import { TweetUrl } from './TweetUrl';

export type Description = {
  urls: TweetUrl[];
};

export type TweetUserEntities = {
  url: {
    urls: TweetUrl[];
  };
  description: Description[];
};

export type TweetUser = {
  id: number;
  id_str: string;
  name: string;
  url: string;
  lang: string | null;
  entities: TweetUserEntities;
  location: string;
  verified: boolean;
  following: boolean;
  protected: boolean;
  time_zone: null;
  created_at: Date;
  utc_offset: null;
  description: string;
  geo_enabled: boolean;
  screen_name: string;
  listed_count: number;
  friends_count: number;
  is_translator: boolean;
  notifications: boolean;
  statuses_count: number;
  default_profile: boolean;
  followers_count: number;
  translator_type: string;
  favourites_count: number;
  profile_image_url: string;
  profile_banner_url: string;
  profile_link_color: string;
  profile_text_color: string;
  follow_request_sent: boolean;
  contributors_enabled: boolean;
  has_extended_profile: boolean;
  default_profile_image: boolean;
  is_translation_enabled: boolean;
  profile_background_tile: boolean;
  profile_image_url_https: string;
  profile_background_color: string;
  profile_sidebar_fill_color: string;
  profile_background_image_url: string;
  profile_sidebar_border_color: string;
  profile_use_background_image: boolean;
  profile_background_image_url_https: string;
};
