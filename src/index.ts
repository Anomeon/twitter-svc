import {createConnection, Connection} from "typeorm";
import {RawTweet} from "./entities/RawTweet";

// import express from 'express';

createConnection().then(async connection => {
  // let rawTweet = new RawTweet();
  // rawTweet.data = {
  //       "created_at": "Wed Nov 18 15:00:17 +0000 2020",
  //       "id": 1329076971964227591,
  //       "id_str": "1329076971964227591",
  //       "full_text": "Нативная раскладка масонри с помощью CSS-гридов. Рейчел Эндрю про новый режим упаковки блоков из черновика 3 уровня Grid Layout, который заработал в Firefox Nightly. Как его включить, как настроить порядок и поведение блоков, как проверить поддержку.\n\nhttps://t.co/p8arDNc3WD https://t.co/lM1XV5r4bQ",
  //       "truncated": false,
  //       "display_text_range": [
  //           0,
  //           275
  //       ],
  //       "entities": {
  //           "hashtags": [],
  //           "symbols": [],
  //           "user_mentions": [],
  //           "urls": [
  //               {
  //                   "url": "https://t.co/p8arDNc3WD",
  //                   "expanded_url": "https://www.smashingmagazine.com/native-css-masonry-layout-css-grid/",
  //                   "display_url": "smashingmagazine.com/native-css-mas…",
  //                   "indices": [
  //                       252,
  //                       275
  //                   ]
  //               }
  //           ],
  //           "media": [
  //               {
  //                   "id": 1329076968545873920,
  //                   "id_str": "1329076968545873920",
  //                   "indices": [
  //                       276,
  //                       299
  //                   ],
  //                   "media_url": "http://pbs.twimg.com/media/EnHUdg1UcAA15YD.jpg",
  //                   "media_url_https": "https://pbs.twimg.com/media/EnHUdg1UcAA15YD.jpg",
  //                   "url": "https://t.co/lM1XV5r4bQ",
  //                   "display_url": "pic.twitter.com/lM1XV5r4bQ",
  //                   "expanded_url": "https://twitter.com/webstandards_ru/status/1329076971964227591/photo/1",
  //                   "type": "photo",
  //                   "sizes": {
  //                       "medium": {
  //                           "w": 1200,
  //                           "h": 630,
  //                           "resize": "fit"
  //                       },
  //                       "thumb": {
  //                           "w": 150,
  //                           "h": 150,
  //                           "resize": "crop"
  //                       },
  //                       "large": {
  //                           "w": 1200,
  //                           "h": 630,
  //                           "resize": "fit"
  //                       },
  //                       "small": {
  //                           "w": 680,
  //                           "h": 357,
  //                           "resize": "fit"
  //                       }
  //                   }
  //               }
  //           ]
  //       },
  //       "extended_entities": {
  //           "media": [
  //               {
  //                   "id": 1329076968545873920,
  //                   "id_str": "1329076968545873920",
  //                   "indices": [
  //                       276,
  //                       299
  //                   ],
  //                   "media_url": "http://pbs.twimg.com/media/EnHUdg1UcAA15YD.jpg",
  //                   "media_url_https": "https://pbs.twimg.com/media/EnHUdg1UcAA15YD.jpg",
  //                   "url": "https://t.co/lM1XV5r4bQ",
  //                   "display_url": "pic.twitter.com/lM1XV5r4bQ",
  //                   "expanded_url": "https://twitter.com/webstandards_ru/status/1329076971964227591/photo/1",
  //                   "type": "photo",
  //                   "sizes": {
  //                       "medium": {
  //                           "w": 1200,
  //                           "h": 630,
  //                           "resize": "fit"
  //                       },
  //                       "thumb": {
  //                           "w": 150,
  //                           "h": 150,
  //                           "resize": "crop"
  //                       },
  //                       "large": {
  //                           "w": 1200,
  //                           "h": 630,
  //                           "resize": "fit"
  //                       },
  //                       "small": {
  //                           "w": 680,
  //                           "h": 357,
  //                           "resize": "fit"
  //                       }
  //                   }
  //               }
  //           ]
  //       },
  //       "source": "<a href=\"https://amplifr.com\" rel=\"nofollow\">Amplifr</a>",
  //       "in_reply_to_status_id": null,
  //       "in_reply_to_status_id_str": null,
  //       "in_reply_to_user_id": null,
  //       "in_reply_to_user_id_str": null,
  //       "in_reply_to_screen_name": null,
  //       "user": {
  //           "id": 42081171,
  //           "id_str": "42081171",
  //           "name": "Веб-стандарты",
  //           "screen_name": "webstandards_ru",
  //           "location": "",
  //           "description": "Ежедневные новости и события фронтенда от сообщества веб-разработчиков. Редакторы новостей @pepelsbey и @dark_mefody.",
  //           "url": "https://t.co/lX3kYWFlXv",
  //           "entities": {
  //               "url": {
  //                   "urls": [
  //                       {
  //                           "url": "https://t.co/lX3kYWFlXv",
  //                           "expanded_url": "https://web-standards.ru",
  //                           "display_url": "web-standards.ru",
  //                           "indices": [
  //                               0,
  //                               23
  //                           ]
  //                       }
  //                   ]
  //               },
  //               "description": {
  //                   "urls": []
  //               }
  //           },
  //           "protected": false,
  //           "followers_count": 10873,
  //           "friends_count": 0,
  //           "listed_count": 333,
  //           "created_at": "Sat May 23 19:18:55 +0000 2009",
  //           "favourites_count": 3,
  //           "utc_offset": null,
  //           "time_zone": null,
  //           "geo_enabled": false,
  //           "verified": false,
  //           "statuses_count": 10209,
  //           "lang": null,
  //           "contributors_enabled": false,
  //           "is_translator": false,
  //           "is_translation_enabled": false,
  //           "profile_background_color": "2E5A75",
  //           "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
  //           "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
  //           "profile_background_tile": false,
  //           "profile_image_url": "http://pbs.twimg.com/profile_images/1175398070374359040/jk1eYuGo_normal.jpg",
  //           "profile_image_url_https": "https://pbs.twimg.com/profile_images/1175398070374359040/jk1eYuGo_normal.jpg",
  //           "profile_banner_url": "https://pbs.twimg.com/profile_banners/42081171/1589984033",
  //           "profile_link_color": "2E5A75",
  //           "profile_sidebar_border_color": "B1D7E5",
  //           "profile_sidebar_fill_color": "EBF7FB",
  //           "profile_text_color": "262626",
  //           "profile_use_background_image": false,
  //           "has_extended_profile": false,
  //           "default_profile": false,
  //           "default_profile_image": false,
  //           "following": null,
  //           "follow_request_sent": null,
  //           "notifications": null,
  //           "translator_type": "none"
  //       },
  //       "geo": null,
  //       "coordinates": null,
  //       "place": null,
  //       "contributors": null,
  //       "is_quote_status": false,
  //       "retweet_count": 2,
  //       "favorite_count": 22,
  //       "favorited": false,
  //       "retweeted": false,
  //       "possibly_sensitive": false,
  //       "lang": "ru"
  //   }

  let rawTweetRepository = connection.getRepository(RawTweet);
  // await rawTweetRepository.save(rawTweet);
  let savedRawTweets = await rawTweetRepository.createQueryBuilder()
    // .where('data @> :data', { data: { user: { id: 42081171 }, }, })
    .where('data @> :data', { data: { extended_entities: { media: [{sizes: { large: { h: 631 }}}], }, }, })
    .getOne();
  // console.log((await rawTweetRepository.find())[0]);
  console.log(JSON.stringify(savedRawTweets, null, 2));
}).catch(e => console.log(e));

// const init = async () => {
//   try {
//     const connection: Connection = await createConnection({
//         "type": "postgres",
//   "host": "localhost",
//   "port": 5432,
//   "database": "twitter_archive_development",
//   "username": "dev",
//   "password": "dev",
//   poolErrorHandler: (error) => console.log(error),
//   logging: true,
//     });
//     console.log('init');
//   } catch (error) {
//     console.log(error);
//   }
// }

// await init();

// import { buildSchema } from 'graphql';
// import graphqlHTTP from 'express-graphql';

// const app = express();

// const schema = buildSchema(`
//   type User {
//     id: Int,
//     name: String,
//     email: String
//   }

//   type Query {
//     user: User
//   }
// `);

// class User {
//   id: Number;
//   name: String;
//   email: String;

//   constructor() {
//     this.id = 1;
//     this.name = 'Dan';
//     this.email = 'danuy@list.ru';
//   }
// }

// const root = {
//   user: () => {
//     return new User();
//   },
// };

// app.use(
//   '/graphql',
//   graphqlHTTP({
//     schema,
//     rootValue: root,
//     graphiql: true,
//   }),
// );

// app.listen(4000);
