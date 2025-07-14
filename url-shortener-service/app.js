const express = require('express');
const app = express();
const router = require('./routes/shorturl.routes');
const redirect = require('./controllers/redirect.controller');

app.use(express.json());
app.use('/shorturls', router);
app.get('/:code', redirect);

module.exports = app;
