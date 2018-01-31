'use strict';

// Initialize the environment

const { before, after } = require('mocha');
const log = console;

// clearing the database before running tests
before(async () => {
  log.log('Running global.tests.js');
});

after(async () => {
  log.log('Test run complete');
});
