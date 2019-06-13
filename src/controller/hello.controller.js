const Utils = require('./../utils/utils');

class HelloController {
  constructor() {

  }

  hello(req, res) {
    try {
      res.status(200).json(Utils.createSuccessJson({ hello: "world" }, 200))
    } catch (err) {
      res.status(200).json(Utils.createErrorJson("Internal server error", 500));
    }
  }
}

module.exports = HelloController;
