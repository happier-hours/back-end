const express = require('express');
const app = express();

app.use(express.json());

app.use('/api/v1/places', require('./routes/places'));

app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
