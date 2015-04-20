/*
 * index.js: DNSMadeEasy DNS Client
 *
 * (C) 2014 Evan Lucas
 * MIT LICENSE
 *
 */

var utile = require('utile'),
    urlJoin = require('url-join'),
    base = require('../../../core/base'),
    auth = require('../../../common/auth');

var Client = exports.Client = function(options) {
  base.Client.call(this, options);

  if (!this.before) {
    this.before = [];
  }

  this.protocol = options.protocol || 'https://';
  this.url = options.url || 'api.dnsmadeeasy.com';

  this.before.push(auth.dme);

  this.before.push(function (req) {
    req.json = true;
    if (typeof req.body != 'undefined') {
      req.headers['Content-Type'] = 'application/json';
      req.body = JSON.stringify(req.body)
    }
  });

  utile.mixin(this, require('./records.js'));
  utile.mixin(this, require('./zones.js'));
};

utile.inherits(Client, base.Client);

Client.prototype._getUrl = function(options) {
  options = options || {};

  return urlJoin(this.protocol + this.url, '/V2.0/dns/',
    typeof options === 'string'
      ? options
      : options.path);
};

Client.prototype.failCodes = {
  400: 'Bad Request',
  401: 'Unauthorized',
  404: 'Domain or Record not found',
  413: 'Over Limit',
  500: 'Fault',
  503: 'Service Unavailable'
};

Client.prototype.successCodes = {
  200: 'OK',
  201: 'Created',
  202: 'Accepted'
};
