const express = require('express');
const app = express();
const ensureAuth = require('../lib/middleware/ensure-auth');

app.use(require('cors')());

app.use(express.json());

app.use('/api/v1/places', ensureAuth(), require('./routes/places'));

app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;

