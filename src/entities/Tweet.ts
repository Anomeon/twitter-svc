import { Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn Column, OneToMany, ManyToOne } from "typeorm";
import { User } from './User';
import { Entity as EntityModel } from './Entity';

@Entity()
export class Tweet {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  twitter_id: number;

  @Column()
  twitter_created_at: Date;

  @Column()
  full_text: string;

  @Column({ array: true })
  display_text_range: number[];

  @Column()
  truncated: boolean;

  @Column()
  source: string;

  @Column()
  is_quote_status: boolean;

  @Column()
  retweet_count: number;

  @Column()
  favorite_count: number;

  @Column()
  favorited: boolean;

  @Column()
  retweeted: boolean;

  @Column()
  possibly_sensitive: boolean;

  @Column()
  lang: string

  @CreateDateColumn()
  created_date: Date;

  @UpdateDateColumn()
  updated_date: Date;

  @OneToMany(type => Entity, entity => entity.tweet)
  entities: EntityModel[];

  @ManyToOne(type => User, user => user.tweets)
  user: User;

  // geo: ?
  // coordinates: ?
  // place: ?
  // contributors: ?
  // in_reply_to_status_id: ?
  // in_reply_to_status_id_str: ?
  // in_reply_to_user_id: ?
  // in_reply_to_user_id_str: ?
  // in_reply_to_screen_name: ?
}
