const express = require('express');
const { v4: uuidv4 } = require('uuid');

const messageRouter = express();

messageRouter.get('/', (req, res) => {
  return res.send(Object.values(req.context.models.messages));
});

messageRouter.get('/:messageId', (req, res) => {
  return res.send(req.context.models.messages[req.params.messageId]);
});

messageRouter.post('/', (req, res) => {
  const id = uuidv4();
  const message = {
    id,
    text: req.body.text,
    userId: req.context.me.id,
  };

  req.context.models.messages[id] = message;

  return res.send(message);
});

messageRouter.delete('/:messageId', (req, res) => {
  const {
    [req.params.messageId]: message,
    ...otherMessages
  } = req.context.models.messages;

  req.context.models.messages = otherMessages;

  return res.send(message);
});

module.exports = messageRouter;
