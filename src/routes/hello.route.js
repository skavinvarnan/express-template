const express = require('express');
const HelloController = require('../controller/hello.controller');
const helloAuth = require('../policies/hello.auth');

const helloController = new HelloController();

const router = express.Router();

router.get('/world', async (req, res) => {
  await helloController.hello(req, res);
});

router.get('/world_with_auth', helloAuth, async (req, res) => {
  await helloController.hello(req, res);
});

module.exports = router;
