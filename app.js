const express = require('express');
const models = require('./models/model.js');
const routes = require('./routes/index.js');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  req.context = {
    models,
    me: models.users[1],
  };
  next();
});

app.use('/session', routes.sessionRouter);
app.use('/users', routes.userRouter);
app.use('/messages', routes.messageRouter);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
