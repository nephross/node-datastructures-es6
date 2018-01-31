'use strict';

const chai = require('chai');
const expect = chai.expect;
const { describe, it, beforeEach, before, after } = require('mocha');

// MODELS
const model = require('./../../../api/lib/db/models');

// CONTROLLER
const mappingController = require('../../../api/controllers/mapping/mapping.controller');

describe(__filename.replace(/\/.*\//, '').replace('.js', ''), () => {
  beforeEach(async () => {
    // EMPTY THE TABLES
    await model.clients.sync({force: true});
    await model.years.sync({force: true});
    await model.mappingStatus.sync({force: true});
  });

  describe('Description of the test - another description change', () => {
    it('Should pass because all is true - ish', async () => {
      expect(true).to.eq(true);
    });
  });
});
