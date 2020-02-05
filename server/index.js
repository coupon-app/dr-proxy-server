/* eslint-disable no-console */
const express = require('express');
const path = require('path');
const api = require('./api');

const app = express();
const PORT = process.env.PORT || 8080;
const PUBLIC_DIR = path.resolve(__dirname, '..', 'client', 'public');

app.use('/', express.static(PUBLIC_DIR));

app.use('/api', api);

app.listen(PORT, () => {
  console.log('Listening on port', PORT);
});
