
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const http = require('http');
const https = require('https');

const fs = require('fs');
const config = require('./utils/config');
const logger = require('./utils/logger');
const connectToMongoDb = require('./mongo/mongo.connect').connectToDb;
const Utils = require('./utils/utils');
const baseRoute = require('./routes/base.routes');

Utils.consoleAsciiSignature();

logger.info('😀😀😀️ Starting Server 😀😀😀😀');
logger.info(`🆚🆚🆚 Version No: ${require('./../package.json').version} 🆚🆚🆚`);

const startServer = () => {
  return new Promise((resolve) => {
    try {
      const app = express();
      let server;
      if (config.isProduction) {
        // server = http.Server(app);
        // Should be done on production
        server = https.createServer({
          key: fs.readFileSync('./src/ssl/private.pem'),
          cert: fs.readFileSync('./src/ssl/certificate.pem'),
          ca: fs.readFileSync('./src/ssl/ca_bundle.pem'),
        }, app);
      } else {
        server = http.Server(app);
      }

      app.use(cors());
      app.use(bodyParser.json({ limit: '5mb' }));
      app.use(bodyParser.urlencoded({ extended: true }));

      if (config.showHttpLogs) {
        app.use(morgan('dev'));
      }

      app.use('/api', baseRoute);

      app.get('/', (req, res) => {
        res.status(200).json(Utils.createErrorJson("Invalid endpoint", 400));
      });

      const serverPort = config.isProduction ? config.productionServerPort : config.devServerPort;

      server.listen(serverPort, () => {
        logger.info(`🚀🚀🚀 Server started at PORT: ${serverPort}`);
      });

      resolve();

    } catch (err) {
      logger.error('😔😔😔 Error starting server 😔😔😔', err);
      process.exit(1);
    }
  });
};

if (config.establishMongoConnection) {
  connectToMongoDb()
    .then(startServer)
    .then(() => {
      logger.info('😁😁😁 Server Started 😁😁😁')
    });
} else {
  startServer()
    .then(() => {
      logger.info('😁😁😁 Server Started 😁😁😁')
    });
}

