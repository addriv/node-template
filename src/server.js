import Hapi from 'hapi';
import { createLogger } from 'bunyan';
import DotEnv from 'dotenv-safe';

DotEnv.load();

const logger = createLogger({
  name: 'web-backend',
  level: 'trace'
});

const server = Hapi.Server({
  port: process.env.SERVER_PORT,
  host: process.env.SERVER_HOST
});

const startServer = async logger => {
  await server.start();
  console.log(`Server running at: ${server.info.uri}`);
};

process.on('unhandledRejection', err => {
  console.log(err);
  process.exit(1);
});

startServer(logger);
