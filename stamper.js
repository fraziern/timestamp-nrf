var Stamper = function () {};

Stamper.prototype.isUnix = function (input) {
  var reg = /^\d+$/;
  return (reg.test(input));
};

Stamper.prototype.getTimestamp = function (input) {
  var timestamp = {},
    date;
  if (this.isUnix(input)) {
    date = new Date(parseInt(input));
  } else {
    date = new Date(decodeURIComponent(input));
  }

  var months = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'];

  timestamp.unix = date.getTime();
  timestamp.natural = months[date.getMonth()] + ' ' + date.getDate() +
    ', ' + date.getFullYear();

  return JSON.stringify(timestamp);
};

module.exports = Stamper;
