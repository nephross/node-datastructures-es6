'use strict';

const chai = require('chai');
const expect = chai.expect;
const { describe, it, beforeEach, before, after } = require('mocha');



describe(__filename.replace(/\/.*\//, '').replace('.js', ''), async () => {
  describe('LinkedList tests', async () => {
    it('Should pass because all is true - ish', async () => {
      expect(true).to.eq(true);
    });
  });
});
