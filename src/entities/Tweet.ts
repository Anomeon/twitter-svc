// /* https://developer.twitter.com/en/docs/twitter-api/v1/data-dictionary/overview/tweet-object */

// import { Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, Column, ManyToOne } from "typeorm";
// import { User } from './User';

// import { Entity as TweetEntity, ExtendedEntity, Indice, Coordinate, Place, Geo, Permalink } from '../types/Tweet';

// @Entity()
// export class Tweet {
//   @Column()
//   created_at: Date;

//   @Column()
//   id: number;

//   @Column()
//   id_str: string

//   @Column()
//   full_text: string;

//   @Column()
//   truncated: boolean;

//   @Column({ array: true })
//   display_text_range: Indice;

//   @Column({ type: "jsonb" })
//   entities: TweetEntity;

//   @Column({ type: "jsonb" })
//   extended_entities: ExtendedEntity;

//   @Column()
//   source: string;

//   @Column({ nullable: true })
//   in_reply_to_status_id: number;

//   @Column({ nullable: true })
//   in_reply_to_status_id_str: string;

//   @Column({ nullable: true })
//   in_reply_to_user_id: number;

//   @Column({ nullable: true })
//   in_reply_to_user_id_str: string;

//   @Column({ nullable: true })
//   in_reply_to_screen_name: string;

//   @ManyToOne(type => User, user => user.tweets)
//   user: User;

//   /* deprecated */
//   @Column({ nullable: true })
//   geo: Geo;

//   @Column({ nullable: true })
//   coordinates: Coordinate;

//   @Column({ nullable: true })
//   place: Place;

//   /* not specified in Doc */
//   @Column({ nullable: true })
//   contributors: any;

//   @Column()
//   is_quote_status: boolean;

//   @Column()
//   quoted_status_id: number;

//   @Column()
//   quoted_status_id_str: string;

//   @Column({ type: "jsonb" })
//   quoted_status_permalink: Permalink;

//   @Column({ type: "jsonb" })
//   quoted_status: Tweet;

//   /* specified only in Doc */
//   @Column({ type: "jsonb", nullable: true })
//   retweeted_status: Tweet;

//   /* specified only in Doc */
//   @Column({ type: "jsonb", nullable: true })
//   filter_level: 'none' | 'low' | 'medium' | null;

//   @Column()
//   retweet_count: number;

//   @Column({ nullable: true })
//   favorite_count: number;

//   @Column({ nullable: true })
//   favorited: boolean;

//   @Column()
//   retweeted: boolean;

//   @Column({ nullable: true })
//   possibly_sensitive: boolean;

//   @Column({ nullable: true })
//   lang: string;
// }
