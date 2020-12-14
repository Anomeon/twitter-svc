import fs from 'fs';
import { createConnection, Connection } from 'typeorm';
import _ from 'lodash';
import { TweetService } from '../services/TweetService';
import util from 'util';
import { logger } from '../../logger';

type TwitterExportLike = {
  like: {
    tweetId: string;
    fullText: string;
    expandedUrl: string;
  };
};

const sleep = util.promisify(setTimeout);
(async () => {
  try {
    const connection: Connection = await createConnection();
    logger.info('saveLikes started');
    fs.readFile(
      '/Users/anomeon/Downloads/like.js',
      'utf8',
      async (error, data) => {
        if (error) {
          logger.error(error);
          return;
        }
        const preparedData = data.replace(/window.YTD.like.part0 = /, '');
        const parsedData: TwitterExportLike[] = JSON.parse(preparedData);
        const tweetsIds = parsedData.map((data) => data.like.tweetId);

        const tweetService = new TweetService(connection);
        const tweetIdsChunks = _.chunk(tweetsIds, 100);

        for (const tweetIdsChunk of tweetIdsChunks) {
          try {
            await tweetService.saveTweetsByIds(tweetIdsChunk);
          } catch (error) {
            logger.error(error);
          } finally {
            await sleep(1000);
          }
        }
        logger.info('saveLikes finished');
      },
    );
  } catch (error) {
    logger.error(error);
  }
})();
