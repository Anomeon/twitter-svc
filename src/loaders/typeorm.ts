import { createConnection, Connection } from 'typeorm';
import { logger } from '../../logger';

export const typeormLoader = async (): Promise<Connection | void> => {
  try {
    await createConnection();
    logger.info('Connected to DB');
  } catch (error) {
    logger.error(error);
  }
};
