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

/* Types based on imported data, cause official documentation has divergency with reality */
export type TweetUser = {
  id: number;
  id_str: string;
  name: string;
  url: string | null;
  entities: TweetUserEntities;
  location: string | null;
  verified: boolean;
  protected: boolean;
  created_at: Date;
  description: string;
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
  utc_offset: null;
  time_zone: null;
  lang: null;
  geo_enabled: boolean;
  following: boolean;
  follow_request_sent: boolean;
  has_extended_profile: boolean;
  profile_image_url: string;
  profile_banner_url: string | null;
  profile_link_color: string;
  profile_text_color: string;
  contributors_enabled: boolean;
  default_profile_image: boolean;
  is_translation_enabled: boolean;
  profile_background_tile: boolean;
  profile_image_url_https: string;
  profile_background_color: string;
  profile_sidebar_fill_color: string;
  profile_background_image_url: string | null;
  profile_sidebar_border_color: string;
  profile_use_background_image: boolean;
  profile_background_image_url_https: string | null;
};
