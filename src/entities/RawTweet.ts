import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity('raw_tweets')
export class RawTweet {
  @PrimaryColumn()
  id: string;

  @Column({ type: "jsonb" })
  data: any;
}
