#!/usr/bin/env babel-node

import app from '../server.js';

const port = 8080;

app().listen(port, () => {
  // eslint-disable-next-line
  console.log(`Server has been started, at ${new Date()} on port: ${port}`);
});