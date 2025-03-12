const express = require('express');

const sessionRouter = express();

sessionRouter.get('/', (req, res) => {
  return res.send(req.context.models.users[req.context.me.id]);
});

module.exports = sessionRouter;
