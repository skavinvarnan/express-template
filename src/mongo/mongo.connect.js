const mongoose = require('mongoose');
const logger = require('../utils/logger');
const config = require('../utils/config');

const connectToDb = async () => {
  try {
    await mongoose.connect(config.database.mongo.url, { useNewUrlParser: true, useFindAndModify: false, useCreateIndex: true });
    logger.info('🔌🔌🔌 Connected to MongoDB!!!');
  } catch (err) {
    logger.error(`✋✋✋🛑🛑🛑 Could not connect to MongoDB. ${err} 🛑🛑🛑✋✋✋`);
    process.exit(1);
  }
};

module.exports = { connectToDb };
