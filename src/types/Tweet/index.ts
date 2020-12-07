/* Common types */

export type Indice = [number, number]

export type Longitude = number;
export type Latitude = number;

export type GeoJsonCoordinate = [
  Longitude,
  Latitude,
]

export type Coordinate = {
  сoordinates: GeoJsonCoordinate,
  type: string,
}

export type SizeDemension = {
  w: number,
  s: number,
  resize: string,
}

export type Size = {
  thumb: SizeDemension
  medium: SizeDemension,
  small: SizeDemension,
  large: SizeDemension,
}


/* Entity types */

export type Hashtag = {
  text: string,
  indices: Indice,
}

export type Symbol = {
  text: string,
  indices: Indice,
}

export type UserMention = {
  screen_name: string,
  name: string,
  id: number,
  id_str: string,
  indices: Indice,
}

export type Media = {
  id: number,
  is_str: string,
  indices: Indice,
  media_url: string,
  media_url_https: string,
  url: string,
  display_url: string,
  expanded_url: string,
  type: string,
  sizes: Size,
}

export type Url = {
  url: string,
  expanded_url: string,
  display_url: string,
  indices: Indice,
}

/* Tweet types */

export type Entity = {
  hashtags: Hashtag[],
  symbols: Symbol[],
  user_mentions: UserMention[],
  urls: Url[],
  media: Media[],
}

export type ExtendedEntity = {
  media: Media[],
}

export type Attribute = {};

export type DotCoordinate = [number, number];

export type BoundingBox = {
  coordinates: DotCoordinate[][],
  type: string,
}

/* https://developer.twitter.com/en/docs/twitter-api/v1/data-dictionary/overview/geo-objects#place-dictionary */
export type Place = {
  id: string,
  url: string,
  place_type: string,
  name: string
  full_name: string
  country_code: string
  country: string
  bounding_box: BoundingBox,
  attributes: Attribute,
}

export type Geo = [Latitude, Longitude]

export type Permalink = {
  url: string,
  expanded: string,
  display: string,
}
