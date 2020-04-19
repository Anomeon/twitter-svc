import { Column, PrimaryGeneratedColumn } from "typeorm";

// TODO
export enum EntitySubType {
  PHOTO = "photo",
};

export enum EntityType {
  MEDIA = 'media',
  URL = 'url',
  DESCRIPTION = 'description',
  USER_MENTION = 'user_mention',
  SYMBOL = 'symbol',
  HASHTAG = 'hashtag',
};

// TODO
interface IEntitySize {
  w: number,
  h: number,
  resize: string,
};

export class Entity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  url: string;

  @Column()
  expanded_url: string;

  @Column()
  screen_name: string;

  @Column()
  name: string;

  @Column()
  text: string;

  @Column()
  display_url: string;

  @Column({ array: true })
  indices: number[];

  @Column()
  media_url: string;

  @Column()
  media_url_https: string;

  @Column({ type: "enum", enum: EntitySubType })
  sub_type: string;

  @Column({ type: 'jsonb' })
  sizes: object; // TODO

  @Column({ type: "enum", enum: EntityType })
  type: string;

  @Column()
  entityable_id: number;

  @Column()
  entityable_type: string;
}
