const isProd = !!(process.env.IS_PROD && process.env.IS_PROD === 'true');

module.exports = {
  database: {
    mongo: {
      url: 'MONGO URL'
    }
  },
  establishMongoConnection: false,
  isProduction: isProd,
  showHttpLogs: true,
  devServerPort: 6000,
  productionServerPort: 80
};
