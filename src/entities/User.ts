// /* https://developer.twitter.com/en/docs/twitter-api/v1/data-dictionary/overview/user-object */

// import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm";
// import { Entity as EntityModel } from './Entity';
// import { Tweet } from './Tweet';

// @Entity()
// export class User {
//   @Column()
//   id: number;

//   @Column()
//   created_at: Date;

//   @Column()
//   name: string;

//   @Column()
//   screen_name: string;

//   @Column()
//   location: string;

//   @Column()
//   description: string;

//   @Column()
//   url: string;

//   @Column()
//   protected: boolean;

//   @Column()
//   followers_count: number;

//   @Column()
//   friends_count: number;

//   @Column()
//   listed_count: number;

//   @Column()
//   favourites_count: number;

//   @Column()
//   geo_enabled: boolean;

//   @Column()
//   verified: boolean;

//   @Column()
//   statuses_count: number;

//   @Column()
//   lang: string;

//   @Column()
//   contributors_enabled: boolean;

//   @Column()
//   is_translator: boolean;

//   @Column()
//   is_translation_enabled: boolean;

//   @Column()
//   profile_background_color: string;

//   @Column()
//   profile_background_image_url: string;

//   @Column()
//   profile_background_image_url_https: string;

//   @Column()
//   profile_background_tile: boolean;

//   @Column()
//   profile_image_url: string;

//   @Column()
//   profile_image_url_https: string;

//   @Column()
//   profile_banner_url: string;

//   @Column()
//   profile_link_color: string;

//   @Column()
//   profile_sidebar_border_color: string;

//   @Column()
//   profile_sidebar_fill_color: string;

//   @Column()
//   profile_text_color: string;

//   @Column()
//   profile_use_background_image: boolean;

//   @Column()
//   has_extended_profile: boolean;

//   @Column()
//   default_profile: boolean;

//   @Column()
//   default_profile_image: boolean;

//   @Column()
//   translator_type: string;

//   @OneToMany(type => EntityModel, entity => entity.entityable_id)
//   entities: EntityModel[];

//   @OneToMany(type => Tweet, tweet => tweet.user)
//   tweets: Tweet[];

//   // @Column({ nullable: true })
//   // utc_offset: null,
//   // time_zone: null,
//   // following: null,
//   // follow_request_sent: null,
//   // notifications: null,
// }
