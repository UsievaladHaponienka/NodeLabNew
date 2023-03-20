const express = require('express');
const app = express();

const homeRouter = require('./routes/home'), usersRouter = require('./routes/users');

app.use('/', homeRouter);
app.use('/users', usersRouter);

app.listen(3000);
