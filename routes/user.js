const express = require('express');

const userRouter = express();

userRouter.get('/', (req, res) => {
  return res.send(Object.values(req.context.models.users));
});

userRouter.get('/:userId', (req, res) => {
  return res.send(req.context.models.users[req.params.userId]);
});

module.exports = userRouter;
