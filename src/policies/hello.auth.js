const Utils = require('../utils/utils');

const respondUserNotAuthorised = (res) => {
  res.status(200).json(Utils.createErrorJson('User not Authorised, access_token invalid', 401));
};

module.exports = (req, res, next) => {
  const token = req.header("access_token");

  if (token) {
    if (token === 'secret_token') {
      return next();
    } else {
      respondUserNotAuthorised(res);
    }
  } else {
    respondUserNotAuthorised(res);
  }

};
