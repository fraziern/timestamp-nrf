var assert = require('chai').assert;
var Stamper = require('../stamper');

var stamper = new Stamper();

describe('Stamper', function () {
  describe('#isUnix()', function () {
    it('should return true when passed a number', function () {
      assert.isTrue(stamper.isUnix('23948734'));
    });

    it('should return false when passed natural language', function () {
      assert.isFalse(stamper.isUnix('January2342'));
    });
  });

  describe('#getTimestamp()', function () {
    it('should return timestamp when passed a number', function () {
      assert.equal(stamper.getTimestamp('1450137600000'), JSON.stringify({
        'unix': 1450137600000,
        'natural': 'December 14, 2015'
      }));
    });

    it('should return timestamp when passed natural language', function () {
      assert.equal(stamper.getTimestamp('December%2015,%202015'), JSON.stringify({
        'unix': 1450155600000,
        'natural': 'December 15, 2015'
      }));
    });
  });
});
