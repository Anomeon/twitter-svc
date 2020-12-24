import { logger } from '../logger';

import express from 'express';
import { typeormLoader, expressLoader } from './loaders';

const PORT = 4000;

const startServer = async () => {
  const app = express();

  await typeormLoader();

  await expressLoader({ expressApp: app });

  app.listen(PORT, () => {
    logger.info(`Express server running on ${PORT} port`);
  });
};

startServer();
