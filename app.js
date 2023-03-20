const express = require('express');
const app = express();

const rootRouter = require('./routes')
const usersRouter = require('./routes/users');

app.use('/', rootRouter);
app.use('/users/', usersRouter);
app.listen(3000);
