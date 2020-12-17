import { Entity, Column, PrimaryColumn } from 'typeorm';
import { Tweet } from '../types/Tweet';

@Entity('raw_tweets')
export class RawTweet {
  @PrimaryColumn()
  id!: string;

  @Column({ type: 'jsonb' })
  data!: Tweet;
}
